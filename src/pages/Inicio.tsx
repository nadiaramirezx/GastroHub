import React from 'react';
import '../styles/Inicio.css';

const Inicio: React.FC = () => {
  return (
  
    <div className="recetario-container">
      
      <aside className="sidebar">
        <h3>Mi recetario</h3>
        <ul className="recetas-list">
          <li>Cochinita <span>Pibil</span></li>
          <li>Cochinita <span>Pibil</span></li>
          <li>Cochinita <span>Pibil</span></li>
        </ul>
      </aside>
      <main className="main-content">
        <section className="popular">
          <h2>Lo más <span>Popular</span></h2>
          <div className="popular-categories">
            <div className="category">
              <img src="link-a-tu-imagen-tipica" alt="Tipica" />
              <p>Típica</p>
            </div>
            <div className="category">
              <img src="link-a-tu-imagen-vegana" alt="Vegana" />
              <p>Vegana</p>
            </div>
            <div className="category">
              <img src="link-a-tu-imagen-gourmet" alt="Gourmet" />
              <p>Gourmet</p>
            </div>
          </div>
        </section>
        <section className="recipes-grid">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="recipe">
                <img src="link-a-tu-imagen-mole" alt="Mole Poblano" />
                <p>Mole Poblano</p>
              </div>
            ))}
        </section>
      </main>
      
    </div>
    
  );
};

export default Inicio;
