import React from "react";
import { Link } from "react-router-dom";
import './css/Navbar.css'; // Estilo opcional para o botão

const Navbar = ({ handleLogout }) => {
  return (
    <div id="navbar">
      <div className="container linha">
        <h2 id="logo">FlowAdmin</h2>
        <ul id="menu">
          <li><Link to="/dashboard">Painel</Link></li>
          <li><Link to="/dashboard/adicionar">Adicionar</Link></li>
          <li><Link to="/dashboard/listar">Listar</Link></li>
          <li><a onClick={handleLogout}>Sair</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
