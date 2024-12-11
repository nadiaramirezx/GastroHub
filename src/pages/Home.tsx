import React from 'react';
import '../styles/home.css';
import Card from '../components/Card';
import Comentsection from '../components/Comentsection';
import Header_dos from '../components/Header_dos';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
      <Header_dos/>
      {/* Hero Section */}
      <div className="hero-section">
          <div className="hero-content">
            <h1>
              <span className="comparte">Comparte</span> tu<br /> pasión <br /> culinaria
            </h1>
            <button className="hero-button">Unirse</button>
        </div>
      </div>
      {/* Razones para Elegirnos Section */}
<div className="reasons-section">
<Card/>
</div>
{/*seccion de comentarios*/}
<div className="coment-section">
<Comentsection/>
<Footer/>
</div>  
    </div>
  );
}


export default Home;




