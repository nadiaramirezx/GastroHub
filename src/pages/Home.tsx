import React from 'react';
import '../styles/home.css';
import menu from '../assets/img/menu.png'
import Card from '../components/Card';
import Comentsection from '../components/Comentsection';
//import { Header } from 'react-bootstrap/lib/Modal';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header/>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="highlight-text">Comparte</span> tu<br /> pasión <br /> culinaria
          </h1>
          <button className="hero-button">Try it now</button>
        </div>
        <div className="flex items-center justify-centerr order-1 lg:order-2 hero-image">
          <img 
          src={menu} 
          alt="Recetario"
          className="aspect -[4/3] overflow-hidden rounded-xl object-contain" 
          height={400}
          width={600}
          />
        </div>
      </div>

      {/* Razones para Elegirnos Section */}
      <div className="reasons-section">
        <Card/>
      </div>
      {/*seccion de comentarios*/}
      <div className="coment-section">
        <Comentsection/>
      </div>
    </div>
  );
}


export default Home;
