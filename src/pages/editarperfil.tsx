import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '../Componentes/ProfileContext'; // Importar el hook del contexto
import '../css/EditarPerfil.css';

const EditProfile: React.FC = () => {
  const { user, updateProfile } = useProfile(); // Obtener los datos del perfil y la función para actualizarlo
  const [formData, setFormData] = useState({
    nombre: user.nombre,
    email: user.email,
    telefono: user.telefono,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Actualizar los datos del perfil en el contexto
    updateProfile({
      ...user,
      ...formData,
    });
    navigate('/profile'); // Redirigir al perfil después de guardar
  };

  return (
    <div className="edit-profile-page">
      <h1>Editar Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleInputChange} 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleInputChange} 
          />
        </label>
        <label>
          Teléfono:
          <input 
            type="text" 
            name="telefono" 
            value={formData.telefono} 
            onChange={handleInputChange} 
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditProfile;
