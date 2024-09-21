// src/Dashboard.js
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import './css/Dashboard.css';
import Button from "./components/Button";
import Navbar from "./components/Navbar"

const Dashboard = () => {
	const { sair } = useContext(AppContext);
	const navigate = useNavigate(); // Hook para redirecionamento

	const handleLogout = () => {
		sair();
		navigate("/"); // Redireciona para a página de login
	};

	return (
		<div id="dashboard">
            <Navbar handleLogout={handleLogout} />
			<div id="corpo">
                <div className="container">
                    <h2>Dashboard</h2>
                    <p>Bem-vindo ao Dashboard!</p>
                    
                </div>
            </div>
		</div>
	);
};

export default Dashboard;
