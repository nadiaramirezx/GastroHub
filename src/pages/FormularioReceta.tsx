import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecetas } from '../Componentes/RecetasContext';
import '../css/FormularioReceta.css';

const FormularioReceta: React.FC = () => {
  const { agregarReceta } = useRecetas();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    pasos: '',
    categoria: '',
  });

  const [imagen, setImagen] = useState<File | null>(null);

  // Manejo de cambios en los campos del formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejo de cambio en el input de imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(e.target.files[0]); // Guardar la imagen en el estado
    }
  };

  // Manejo del envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Convertir la imagen a una URL local para previsualización
    const imagenUrl = imagen ? URL.createObjectURL(imagen) : null;

    // Crear un nuevo objeto de receta con un ID único
    const nuevaReceta = {
      id: Date.now(),
      titulo: formData.titulo,
      descripcion: formData.descripcion,
      pasos: formData.pasos,
      categoria: formData.categoria,
      imagen: imagenUrl, // Asignar la URL de la imagen al objeto de la receta
    };

    // Agregar la receta al contexto
    agregarReceta(nuevaReceta);

    // Navegar al Dashboard
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <h1>Crear Receta</h1>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="titulo"
          placeholder="Título de la receta"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
        <textarea
          name="descripcion"
          placeholder="Descripción de la receta"
          value={formData.descripcion}
          onChange={handleChange}
          required
        ></textarea>
        <textarea
          name="pasos"
          placeholder="Pasos para preparar la receta"
          value={formData.pasos}
          onChange={handleChange}
          required
        ></textarea>
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar Categoría</option>
          <option value="desayunos">Desayunos</option>
          <option value="almuerzos">Almuerzos</option>
          <option value="cenas">Cenas</option>
          <option value="postres">Postres</option>
        </select>
        
        {/* Campo para subir la imagen */}
        <label htmlFor="imagen" className="custom-file-upload">
          Seleccionar Imagen
        </label>
        <input
          id="imagen"
          type="file"
          name="imagen"
          accept="image/*"
          onChange={handleImageChange}
          required
          style={{ display: 'none' }}
        />
        
        {/* Vista previa de la imagen seleccionada */}
        {imagen && (
          <div className="image-preview">
            <p>Vista previa:</p>
            <img
              src={URL.createObjectURL(imagen)}
              alt="Vista previa"
              style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
            />
          </div>
        )}

        <button type="submit" className="submit-btn">
          Enviar Receta
        </button>
      </form>
    </div>
  );
};

export default FormularioReceta;
