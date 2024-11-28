import React from 'react';
import '../styles/About.css'
import about from '../assets/img/About.png';
import Carousel from "../components/Carousel";
import Header from '../components/Header';

function About_us (){
return(
   <div className="div-principal">
    <Header/>
    <div className="hero-section">
        <div className="hero-content">
          <h1>
            Un poco de <br></br><span className="highlight-text">Nosotros </span>
          </h1>
          <h4>
          Somos una plataforma digital colaborativa dedicada a <br></br>
          estudiantes de gastronomía, diseñada para revolucionar <br></br>
          la forma en que aprenden y perfeccionan sus habilidades <br></br>
          culinarias. Nuestro sistema permite a los usuarios crear,<br></br> 
          editar y documentar  versiones de una misma receta, <br></br>
          facilitando así el seguimiento de mejoras y adaptaciones <br></br>
          en las técnicas culinarias.
          </h4>
          <button className="px-4 z-30 py-3 bg-[#87899a] 
          rounded-md text-white 
          relative font-semibold 
          after:-z-20 after:absolute 
          after:h-1 after:w-1 after:bg-[#87899a] 
          after:left-5 overflow-hidden after:bottom-0 
          after:translate-y-full after:rounded-md 
          after:hover:scale-[300] after:hover:transition-all 
          after:hover:duration-700 after:transition-all 
          after:duration-700 transition-all 
          duration-700 [text-shadow:3px_5px_2px_#87899a;] 
          hover:[text-shadow:2px_2px_2px_#fda4af] 
          hover:bg-[#fda4af] text-2xl">
          Try it now
          </button>

          
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