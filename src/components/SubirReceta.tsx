import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SlideNav from "./SlideNav"; // Asegúrate de importar SlideNav si lo usas
import SearchBar from "./BarraBusqueda";

interface RecipeType {
  id: number;
  title: string;
  description: string;
  image: string;
  ingredientes: string;
  pasos: string;
  date: string;
}

const Content: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [recipes, setRecipes] = useState<RecipeType[]>([
    { id: 1, title: "Título de la Receta 1", description: "Breve descripción", image: "", ingredientes: "", pasos: "", date: "" },
    { id: 2, title: "Título de la Receta 2", description: "Breve descripción ", image: "", ingredientes: "", pasos: "", date: "" },
  ]);

  useEffect(() => {
    if (location.state?.newRecipe) {
      const newRecipe = location.state.newRecipe;
      setRecipes((prev) => {
        // Verificar si la receta ya existe en el estado
        const exists = prev.some(recipe => recipe.title === newRecipe.title && recipe.date === newRecipe.date);
        if (!exists) {
          return [...prev, { ...newRecipe, id: prev.length + 1 }];
        }
        return prev;
      });
    }
    if (location.state?.editedRecipe) {
      setRecipes((prev) => prev.map(recipe => recipe.id === location.state.editedRecipe.id ? location.state.editedRecipe : recipe));
    }
  }, [location.state]);

  const handleUploadReceta = () => {
    navigate("/RecipeUpload");
  }

  const handleEdit = (recipe: RecipeType) => {
    navigate("/EditarReceta", { state: { recipe } });
  };

  const handleDelete = (id: number) => {
    setRecipes((prev) => prev.filter(recipe => recipe.id !== id));
  };

  return (
    <div className="container">
      <main className="content">
        <SlideNav />
        <div className="busqueda">
          <SearchBar />
        </div>
        <section className="recipes mt-4">
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
                <button type="button" onClick={() => handleEdit(recipe)} className="btn btn-light">Editar</button>
                <button type="button" onClick={() => handleDelete(recipe.id)} className="btn btn-dark">Eliminar</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Content;
