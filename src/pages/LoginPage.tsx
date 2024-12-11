'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from '../components/GoogleLoginButton'
import '../styles/login.css'


function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [error, setError] = useState('')   //Estado para manejar el error

  //funcion para registro
    const handleSignUp = () =>{
    navigate ("/Sign_up"); //redirecciona al sign_up
  }

  //funcion para subir informacion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    try {
      const response = await fetch ('http://localhost:3000/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Credenciales incorrectas');
        return;
      }
      localStorage.setItem('token', data.token);
      navigate('/Recetario1'); // Redirige después del login
      
    } catch (error) {
      setError('Error de conexion a Github');
    }
  
  };

  const handleLoginSuccess = (token: string) => {
    // guardar token en el localstorage//
    console.log("Google Token:", token)
    // Navegar al inicio
    navigate("/Recetario1")

  }

  {/*estructura html*/}
  return (
    <div className="container-login">
      <div className="form-container">
        <div className="p-8 flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          <form onSubmit={handleSubmit} className="w-full space-y-4">
          {error && <p className="text-red-600 text-sm"> {error}</p>}   {/*mensaje de error*/}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-gray-300">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-300">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button 
              type="button" 
              onClick={handleSubmit}
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
            >
              Iniciar Sesion
            </button>
          </form>

          <div className="w-full flex items-center justify-between">
            <hr className="w-full border-t border-gray-600" />
            <span className="px-4 text-gray-400">o</span>
            <hr className="w-full border-t border-gray-600" />
          </div>
          <button 
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300"
              type="button" 
              onClick={handleSignUp}
            >
              Registrarse
            </button>

          <GoogleLoginButton onSuccess={handleLoginSuccess} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
