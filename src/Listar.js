// src/Dashboard.js
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import './css/Listar.css';
import Button from "./components/Button"; // Importe o componente de botão
import Navbar from "./components/Navbar"
import Input from "./components/Input"
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';


const Listar = () => {
	const [links, setLinks] = useState([]); // Estado para armazenar os links
	const [filteredLinks, setFilteredLinks] = useState([]); // Estado para armazenar os links filtrados

	const { sair } = useContext(AppContext);
    const [pesquisa, setPesquisa] = useState('');
	const [selectedOption, setSelectedOption] = useState('filme');
    const [selectedCategoria, setSelectedCategoria] = useState('acao');
    const [selectedCategoria2, setSelectedCategoria2] = useState('filmes');
	const navigate = useNavigate(); // Hook para redirecionamento

	const fetchLinks = async () => {
		const querySnapshot = await getDocs(collection(db, 'links'));
		const fetchedLinks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
		setLinks(fetchedLinks);
	};	

	const handleLogout = () => {
		sair();
		navigate("/"); // Redireciona para a página de login
	};

	useEffect(() => {
		fetchLinks();
	}, []);
	
	const handleSearch = (e) => {
		e.preventDefault();
		const result = links.filter(link => link.nome.toLowerCase().includes(pesquisa.toLowerCase()));
		setFilteredLinks(result);
	};	

	return (
		<div id="dashboardListar">
            <Navbar handleLogout={handleLogout} />
			<div id="corpo">
                <div className="container">
                    <form id="pesquisa">
						<Input
                            type="text"
                            placeholder="Pesquisa..."
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                            required
                        />
						<select id="options" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                            <option value="filme">Filme</option>
                            <option value="canal">Canal</option>
                        </select>
						{
                            selectedOption == "filme" ?
                            <select id="options" value={selectedCategoria} onChange={(e) => setSelectedCategoria(e.target.value)}>
								<option value="acao">Ação</option>
								<option value="aventura">Aventura</option>
								<option value="comedia">Comedia</option>
								<option value="ficcao">Ficção</option>
								<option value="romance">Romance</option>
								<option value="terror">Terror</option>
								<option value="outro">Outro</option>
							</select>
                            : null
                        }
                        {
                            selectedOption == "canal" ?
                            <select id="options" value={selectedCategoria2} onChange={(e) => setSelectedCategoria2(e.target.value)}>
								<option value="gratis">Grátis</option>
								<option value="abertos">Aberto</option>
								<option value="esportes">Esportes</option>
								<option value="filmes">Filmes</option>
								<option value="desenhos">Desenhos</option>
								<option value="24horas">24 Horas</option>
								<option value="outro">Outro</option>
							</select>
                            : null
                        }
						<Button className2="primary" type="submit" onClick={handleSearch}>Pesquisar</Button>
					</form>
					<div id="resultados">
						{filteredLinks.length > 0 ? (
							<table>
								<thead>
									<tr>
										<th>Capa</th>
										<th>Nome</th>
										<th>Tipo</th>
										<th>Categoria</th>
										<th>Ações</th>
									</tr>
								</thead>
								<tbody>
									{filteredLinks.map(link => (
										<tr key={link.id}>
											<td>
												<img src={link.capa} alt={link.nome} />
											</td>
											<td>{link.nome}</td>
											<td>{link.tipo}</td>
											<td>{link.categoria}</td>
											<td>
												<Button className="button" onClick={() => {/* Adicione sua lógica de edição aqui */}}>Editar</Button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						) : (
							<p>Nenhum link encontrado.</p>
						)}
					</div>

                </div>
            </div>
		</div>
	);
};

export default Listar;
