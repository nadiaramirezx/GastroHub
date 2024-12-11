import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/editarReceta.css';
import SlideNav from './SlideNav';


interface RecipeType {
  id: number;
  title: string;
  description: string;
  image: string;
  file?: File;
}




const EditRecipe: React.FC = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const [recipe, setRecipe] = useState<RecipeType>({ id: 0, title: '', description: '', image: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [originalRecipe, setOriginalRecipe] = useState<RecipeType | null>(null);

  //almacenar receta original
useEffect(() => {
  if (location.state?.recipe) {
    setRecipe(location.state.recipe);
    setOriginalRecipe(location.state.recipe);
  }
}, [location.state]);

  useEffect(() => {
   console.log(location.state?.editedRecipe);   //valida datos
    if (location.state?.recipe) {
      setRecipe(location.state.recipe);
    }
  }, [location.state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setRecipe(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
         console.log(event.target?.result);
        setRecipe(prev => ({ ...prev, image: event.target?.result as string }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(recipe);
    navigate('/Recetario1', { state: { editedRecipe: recipe } });
  };

  const handleCancel = () => {
    if (originalRecipe) {
      navigate('/Recetario1', { state: { recipe: originalRecipe } });
    } else {
      navigate('/Recetario1');
    }
  };
  return (
    <div className="edit-recipe-container">
      <SlideNav/>
      <h2>Editar Receta</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={recipe.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen actual</label>
          {recipe.image && <img src={recipe.image} alt={recipe.title} className="current-image" />}
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            ref={imageInputRef}
            accept="image/*"
          />
          <button type="button" onClick={() => imageInputRef.current?.click()} className="upload-btn">
            Subir nueva imagen
          </button>
        </div>
        <div className="form-group">
          <label htmlFor="file">Archivo adjunto</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <button type="button" onClick={() => fileInputRef.current?.click()} className="upload-btn">
            Subir nuevo archivo
          </button>
          {recipe.file && <p>Archivo seleccionado: {recipe.file.name}</p>}
        </div>
        <button type="submit"
         className="submit-btn">Guardar cambios</button>
         <button type="button"
         onClick={handleCancel}
         className="cancelar">Cancelar</button>
      </form>
    </div>
  );
};

export default EditRecipe;