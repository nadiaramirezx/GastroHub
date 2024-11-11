import React from "react";
import '../styles/About.css'
import about from '../assets/img/About.png';
import Carousel from "../components/Carousel";

function About_us (){
return(
   <div>
    <div className="hero-section">
        <div className="hero-content">
          <h1>
            Un poco de <br></br><span className="highlight-text">Nosotros </span>
          </h1>
          <h4>
          Somos una plataforma digital colaborativa dedicada a 
          estudiantes de gastronomía, diseñada para revolucionar 
          la forma en que aprenden y perfeccionan sus habilidades 
          culinarias. Nuestro sistema permite a los usuarios crear, 
          editar y documentar  versiones de una misma receta, 
          facilitando así el seguimiento de mejoras y adaptaciones 
          en las técnicas culinarias.
          </h4>
          <button className="about-button">Try it now</button>
        </div>
        <div className="flex items-center justify-centerr order-1 lg:order-2 hero-image">
          <img 
          src={about} 
          alt="Recetario"
          />
        </div>
  </div>
  {/*seccion del carousel*/}
    <div className="carousel">
      <Carousel/>
    </div>
</div>
  
)
}

export default About_us;