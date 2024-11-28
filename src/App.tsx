import { useState } from 'react'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import About_us from './pages/About_us';
import LoginPage from './pages/LoginPage';
import Recipe from './pages/Recetario';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RecipeUpload from './components/RecipeUpload';
import Registro from './pages/Sign_Up'

function App() {
  return(
    //envolver toda la app dentro de google//
    <GoogleOAuthProvider clientId="679796409823-2gd1h6r4kdjis93tkrcitkat19a8psng.apps.googleusercontent.com">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="About_us" element={<About_us/>} />
        <Route path="RecipeUpload" element={<RecipeUpload/>} />
        <Route path="Sign_up" element={<Registro/>} />

      </Routes>
    </Router>
  </GoogleOAuthProvider>
);

}
export default App;
