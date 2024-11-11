import React from 'react';
import '../styles/Card.css';
import share from '../assets/img/share.jpg';
import tablet from '../assets/img/tablet.jpg';
import organizador from '../assets/img/organizador.jpg';


function Card() {
   return (
    <section>
    <h2>Razones para<br /> <span className="highlight-text">Elegirnos</span></h2>
    <div className="container">
        <div className="card">
          <div className="cover item-a">
            <h1>
              Organiza tus
              <br />
              Ideas
            </h1>
            <div className="card-back">
              <a href="#">Try it Now</a>
              
            </div>
          </div>
        </div>
     
        <div className="card">
          <div className="cover item-b">
            <h1>
              Acceso rapido
              <br />
              a tus creaciones
            </h1>
            <div className="card-back">
              <a href="#">Try it Now</a>
            </div>
          </div>
        </div>
      
      
        <div className="card">
          <div className="cover item-c">
            <h1>
              Comparte con otros
              <br />
              Estudiantes
            </h1>
            <div className="card-back">
              <a href="#">Try it Now</a>
            </div>
          </div>
        </div>
      
    </div>
  </section>
  
   );
 }
 
 export default Card;
