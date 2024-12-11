import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  onFilterChange?: (value: string) => void;
  onSearchChange?: (value: string) => void;
  onAddRecipeClick?: () => void;
}


const SearchBar: React.FC<SearchBarProps> = ({
  onFilterChange,
  onSearchChange,
}) => {
  const navigate = useNavigate();
  const handleUploadReceta = () =>{
    navigate ("/RecipeUpload");
  }
  return (
    <div className="d-flex justify-content-end align-items-center search-bar">
      <select
        className="form-select me-2"
        style={{ maxWidth: '150px' }}
        onChange={(e) => onFilterChange && onFilterChange(e.target.value)}
      >
        <option value="">Filtrar por</option>
        <option value="categoria">Categoría</option>
        <option value="ingredientes">Ingredientes</option>
      </select>
      <input
        type="text"
        placeholder="Buscar"
        className="form-control me-2"
        style={{ maxWidth: '250px' }}
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleUploadReceta}>
        Agregar Receta
      </button>
    </div>
  );
};

export default SearchBar;
