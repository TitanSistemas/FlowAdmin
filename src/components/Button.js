// src/components/Button.js
import React from 'react';
import './css/Button.css'; // Estilo opcional para o botão

const Button = ({ onClick, children, className = "button", className2 }) => {
  const classes = [className, className2].join(' ').trim();
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
