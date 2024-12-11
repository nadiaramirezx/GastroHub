"use client";
import { Carousel } from "flowbite-react";
import woman from '../assets/img/woman.jpg';
import '../styles/carousel.css'; 

function Component() {
  return (
    <div className="carousel-container">
      {/* Contenedor del carrusel */}
      <div className="carousel-wrapper">
        <Carousel
          leftControl={<button className="carousel-button">❮</button>}
          rightControl={<button className="carousel-button">❯</button>}
          indicators={true}
          slideInterval={3000} // Cambia automáticamente cada 3 segundos
        >
          {/* Imágenes del carrusel */}
          <div className="carousel-slide">
            <img src={woman} alt="Mujer 1" className="carousel-image" />
            <div className="carousel-overlay">
              <h2 className="carousel-title">Imagen 1</h2>
              <p className="carousel-text">Descripción de la imagen 1</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={woman} alt="Mujer 2" className="carousel-image" />
            <div className="carousel-overlay">
              <h2 className="carousel-title">Imagen 2</h2>
              <p className="carousel-text">Descripción de la imagen 2</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={woman} alt="Mujer 3" className="carousel-image" />
            <div className="carousel-overlay">
              <h2 className="carousel-title">Imagen 3</h2>
              <p className="carousel-text">Descripción de la imagen 3</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Component;
