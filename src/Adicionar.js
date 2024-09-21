import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import './css/Adicionar.css';
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Input from './components/Input';

const Adicionar = () => {
    const { sair, adicionarLink } = useContext(AppContext);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('filme');
    const [selectedCategoria, setSelectedCategoria] = useState('acao');
    const [selectedCategoria2, setSelectedCategoria2] = useState('filmes');
    const [nome, setNome] = useState('');
    const [capa, setCapa] = useState('');
    const [video, setVideo] = useState('');

    const handleLogout = () => {
        sair();
        navigate("/"); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedOption == "filme"){
            adicionarLink(nome, selectedOption, selectedCategoria, capa, video); // Chama a função adicionarLink
        }else if (selectedOption == "canal") {
            adicionarLink(nome, selectedOption, selectedCategoria2, capa, video); // Chama a função adicionarLink
        }
    };

    return (
        <div id="dashboardAdicionar">
            <Navbar handleLogout={handleLogout} />
            <div id="corpo">
                <div className="container">
                    <form onSubmit={handleSubmit}> {/* Adiciona onSubmit */}
                        <Input
                            label="Nome"
                            type="text"
                            placeholder="Filme, Canal..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <label htmlFor="options">Tipo de media: {String(selectedOption).charAt(0).toUpperCase() + String(selectedOption).slice(1)}</label>
                        <select id="options" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="filme">Filme</option>
                            <option value="canal">Canal</option>
                        </select>
                        {
                            selectedOption == "filme" ?
                            <div>
                                <label htmlFor="options">Categoria: {String(selectedCategoria).charAt(0).toUpperCase() + String(selectedCategoria).slice(1)}</label>
                                <select id="options" value={selectedCategoria} onChange={(e) => setSelectedCategoria(e.target.value)}>
                                    <option value="acao">Ação</option>
                                    <option value="aventura">Aventura</option>
                                    <option value="comedia">Comedia</option>
                                    <option value="ficcao">Ficção</option>
                                    <option value="romance">Romance</option>
                                    <option value="terror">Terror</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            : null
                        }
                        {
                            selectedOption == "canal" ?
                            <div>
                                <label htmlFor="options">Categoria: {String(selectedCategoria2).charAt(0).toUpperCase() + String(selectedCategoria2).slice(1)}</label>
                                <select id="options" value={selectedCategoria2} onChange={(e) => setSelectedCategoria2(e.target.value)}>
                                    <option value="gratis">Grátis</option>
                                    <option value="abertos">Aberto</option>
                                    <option value="esportes">Esportes</option>
                                    <option value="filmes">Filmes</option>
                                    <option value="desenhos">Desenhos</option>
                                    <option value="24horas">24 Horas</option>
                                    <option value="outro">Outro</option>
                                </select>
                            </div>
                            : null
                        }

                        <Input
                            label="Endereço da imagem de capa"
                            type="text"
                            placeholder="Ex: www.site.com/sportv.jpg"
                            value={capa}
                            onChange={(e) => setCapa(e.target.value)}
                            required
                        />
                        <Input
                            label="Link do video"
                            type="text"
                            placeholder="Ex: https://site.ahoradorush.mp4"
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            required
                        />
                        <Button className2="primary" type="submit">Adicionar</Button> {/* Muda para botão de envio */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Adicionar;
