import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Páginas
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import LoginPage from "./pages/LoginPage";
import Recipe from "./pages/Recipe"; // Página del recetario
import RecipeUpload from "./components/RecipeUpload"; // Página de subida de recetas
import Registro from "./pages/Sign_Up";
import Perfil from "./pages/Perfil"; // Asegúrate de importar la página Perfil

// Componentes adicionales
import Header from "./components/Header";

// Google OAuth
import { GoogleOAuthProvider } from "@react-oauth/google";

const App: React.FC = () => {
  return (
    <GoogleOAuthProvider clientId="679796409823-2gd1h6r4kdjis93tkrcitkat19a8psng.apps.googleusercontent.com">
      <Router>
        <Routes>
          {/* Rutas principales */}
          <Route path="/" element={<Home />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Sign_up" element={<Registro />} />
          <Route path="/btn btn-primary" element={<Recipe />} />


          {/* Rutas del Recetario */}
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/RecipeUpload" element={<RecipeUpload />} />

          {/* Ruta para editar perfil */}
          <Route path="/perfil" element={<Perfil />} /> {/* Aquí está la ruta de perfil */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
