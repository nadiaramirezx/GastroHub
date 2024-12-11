import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Iniciar.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación
    navigate('/dashboard'); // Redirige al Dashboard
  };

  return (
    <div className="login-page">
      <h1>Iniciar Sesión</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit" className="btn-login">Entrar</button>
      </form>
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default Login;
