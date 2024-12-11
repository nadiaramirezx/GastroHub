import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Registro.css';

const Register: React.FC = () => {
  return (
    <div className="register-page">
      <h1>Regístrate</h1>
      <form className="register-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Confirmar contraseña" required />
        <button type="submit" className="btn-register">Crear cuenta</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
    </div>
  );
};

export default Register;
