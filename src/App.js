// src/App.js
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './css/App.css';
import { AppContext } from './AppContext';
import Dashboard from './Dashboard';
import Adicionar from './Adicionar'; // Importe a nova página
import Listar from './Listar';
import ProtectedRoute from './ProtectedRoute';

function LoginPage() {
  const { entrar, isAuthenticated } = useContext(AppContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (entrar(username, password)) {
      setMessage('Login bem-sucedido!');
    } else {
      setMessage('Usuário ou senha incorretos.');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />; // Redireciona para o Dashboard se autenticado
  }

  return (
    <div className="app">
      <div className="login-container">
        <h2>FlowAdmin</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">ENTRAR</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        
        {/* Rotas protegidas */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/adicionar"
          element={
            <ProtectedRoute>
              <Adicionar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/listar"
          element={
            <ProtectedRoute>
              <Listar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
