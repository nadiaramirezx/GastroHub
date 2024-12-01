'use client'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Registro() {
  const [nombre, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'Error al registrar usuario');
        return;
      }
      alert('Registro exitoso. Redirigiendo...');
      // Redirigir a Recipe.tsx después del registro exitoso  
      navigate('/Recipe');
    } catch (error) {
      setError('Error de conexión con GastroHub');
    }
  };

  return (
    <div className="container-login">
      <div className="form-container">
        <div className="p-8 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2>Registro</h2>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm text-gray-300">Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-300">Correo Electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-300">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
