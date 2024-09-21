import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from './AppContext'; // Importe o AppContext

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AppContext);

  // Se o usuário não estiver autenticado, redireciona para a página de login
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  // Se estiver autenticado, renderiza a rota normalmente
  return children;
};

export default ProtectedRoute;
