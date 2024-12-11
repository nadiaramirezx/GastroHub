import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Páginas
import Home from "./pages/Home";
import About_us from "./pages/About_us";
import LoginPage from "./pages/LoginPage";
import Content from "./pages/Recetario1"; // Página del recetario
import Registro from "./pages/Sign_Up";
import Perfil from "./pages/Perfil"; 


// Componentes adicionales


// Google OAuth
import { GoogleOAuthProvider } from "@react-oauth/google";
import Inicio from "./pages/Inicio";
import EditRecipe from "./components/EditarReceta";
import RecipeUpload from "./components/SubirReceta";

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
          <Route path="/btn btn-primary" element={<Content />} />
          <Route path="/PageInicial" element={<Inicio/>} />


          {/* Rutas del Recetario */}
          <Route path="/Recetario1" element={<Content/>} />
          <Route path="/RecipeUpload" element={<RecipeUpload/>} />
          <Route path="/EditarReceta" element={<EditRecipe />} />

          {/* Ruta para editar perfil */}
          <Route path="/perfil" element={<Perfil />} /> {/* Aquí está la ruta de perfil */}

          
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;
