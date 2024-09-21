import React, { createContext, useState, useEffect } from 'react';
import { db } from './firebase'; // Importa o Firestore
import { collection, addDoc } from 'firebase/firestore';

// Criar o contexto vazio
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus) {
            setIsAuthenticated(JSON.parse(authStatus));
        }
    }, []);

    // Função para verificar o usuário e a senha
    const entrar = (username, password) => {
        if (username === 'titan' && password === 'Lerafa@13211321') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', true);
            return true;
        } else {
            setIsAuthenticated(false);
            localStorage.setItem('isAuthenticated', false);
            return false;
        }
    };

    // Função para sair (logout)
    const sair = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    // Função para adicionar um link na coleção `links` no Firebase Firestore
    const adicionarLink = async (nome, tipo, categoria, capa, video) => {
        console.log(nome, tipo, categoria, capa, video);
        
        try {
            await addDoc(collection(db, 'links'), {
                nome: nome,
                tipo: tipo,
                categoria: categoria,
                capa: capa,
                video: video,
                views: 0,
                createdAt: new Date() // Timestamp para ordenação
            });
            alert('Link adicionado com sucesso!'); // Alerta de sucesso
        } catch (error) {
            alert(error.message); // Alerta de sucesso
        } finally{
            console.log("concluido");
            
        }
    };

    return (
        <AppContext.Provider value={{ isAuthenticated, entrar, sair, adicionarLink }}>
            {children}
        </AppContext.Provider>
    );
};
