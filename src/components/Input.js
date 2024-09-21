import React from 'react';
import './css/Input.css'; // Opcional: para estilização específica do input

const Input = ({ type = 'text', label, placeholder, value, onChange, required = true }) => {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
      />
    </div>
  );
};

export default Input;
