import React from 'react';
import '../styles/About.css'
import about from '../assets/img/About.png';
import Header_dos from '../components/Header_dos';
import Carousel  from '../components/Carousel'
import Footer from '../components/Footer';

function About_us (){
return(
   <div className="div-principal">
    <Header_dos/>
    <div className="about-section">
    <h1>
            Un poco de <br></br><span className="highlight-text">Nosotros </span>
          </h1>
        <div className="about-content">
          <p>
          Somos una plataforma digital colaborativa dedicada a <br></br>
          estudiantes de gastronomía, diseñada para revolucionar <br></br>
          la forma en que aprenden y perfeccionan sus habilidades <br></br>
          culinarias. Nuestro sistema permite a los usuarios crear,<br></br> 
          editar y documentar  versiones de una misma receta, <br></br>
          facilitando así el seguimiento de mejoras y adaptaciones <br></br>
          en las técnicas culinarias.
          </p>
        </div>
        
  </div>
 {/*seccion del carousel*/}
 <div className="equipo">
 <h1> Nuestro 
    <span className="equipo-text">Equipo</span>
  </h1>
 </div>
 <Carousel/>
 <Footer/>
</div>
  
)
}

export default About_us;

 