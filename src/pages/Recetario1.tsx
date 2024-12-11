import React, { useEffect, useState } from 'react';
import '../styles/Content.css';
import SearchBar from '../components/BarraBusqueda';
import { useLocation, useNavigate } from 'react-router-dom';
import SlideNav from '../components/SlideNav';

// Definir el tipo de receta
interface RecipeType {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Content: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [recipes, setRecipes] = useState<RecipeType[]>([
    { id: 1, title: "Título de la Receta 1", description: "Breve descripción", image: "" },
    { id: 2, title: "Título de la Receta 2", description: "Breve descripción ", image: "" },
  ]);

  useEffect(() => {
    if (location.state?.newRecipe) {
      setRecipes((prev) => [...prev, { ...location.state.newRecipe, id: prev.length + 1 }]);
    }
    if (location.state?.editedRecipe) {
      setRecipes((prev) => 
        prev.map(recipe => 
          recipe.id === location.state.editedRecipe.id ? location.state.editedRecipe : recipe
        )
      );
    }
  }, [location.state]);

  const handleEdit = (recipe: RecipeType) => {
    navigate("/EditarReceta", { state: { recipe } });
  };

  const handleDelete = (id: number) => {
    setRecipes((prev) => prev.filter(recipe => recipe.id !== id));
  };

  return (
    <div >
      <header className="header">
        <h1 className="header-title">Recetas del Chef</h1>
      </header>
      <main className="content">
        <SlideNav/>
        <div className="busqueda">
          <SearchBar />
        </div>
        <section className="recipes mt-2">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-image-placeholder">
                {recipe.image ? (
                  <img src={recipe.image} alt={recipe.title} />
                ) : (
                  <i className="bi bi-image"></i>
                )}
              </div>
              <p className="recipe-title">{recipe.title}</p>
              <p className="recipe-description">{recipe.description}</p>
              <div className="card-actions">
                <button 
                  type="button"
                  onClick={() => handleEdit(recipe)}
                  className="btn btn-light">
                  Editar
                </button>
                <button 
                  type="button"
                  onClick={() => handleDelete(recipe.id)}
                  className="btn btn-dark">
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Content;