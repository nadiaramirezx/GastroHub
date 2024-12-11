import React from 'react';
import '../css/Nosotros.css';
import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";


const AboutUs: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="about-us">
      <h1 className="about-title">Sobre Nosotros</h1>

      <section className="section">
        <div className="section-content">
          <h2>Misión</h2>
          <p>
            Somos una empresa dedicada a crear soluciones innovadoras que potencien la colaboración, el intercambio de conocimientos y la creatividad en la industria gastronómica, fortaleciendo comunidades y promoviendo el desarrollo global del sector.
          </p>
        </div>
        <div className="section-image">
          <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Misión" />
        </div>
      </section>

      <section className="section reverse">
        <div className="section-content">
          <h2>Visión</h2>
          <p>
            Consolidarnos como la empresa líder en el ámbito gastronómico, reconocida por transformar la manera en que las personas colaboran, comparten y experimentan la cocina, y por nuestro compromiso con la innovación, la diversidad y el impacto positivo en la sociedad.
          </p>
        </div>
        <div className="section-image">
          <img src="https://estaticosgn-cdn.deia.eus/clip/a028e07a-7202-432d-b4d8-1a0115a2de93_16-9-aspect-ratio_default_0.jpg" alt="Visión" />
        </div>
      </section>

      <section className="section">
        <div className="section-content">
          <h2>Valores</h2>
          <p><strong>Respeto:</strong> Valoramos a nuestros colaboradores, socios y clientes, promoviendo un entorno inclusivo que fomente la creatividad y el crecimiento mutuo.</p>
          <p><strong>Diversidad:</strong> Celebramos la riqueza cultural en cada aspecto de nuestro trabajo, integrando diferentes perspectivas para ofrecer soluciones globales.</p>
          <p><strong>Humildad:</strong> Aprendemos continuamente, reconociendo nuestras fortalezas y áreas de mejora para mantenernos en constante evolución.</p>
          <p><strong>Libertad:</strong> Creemos en la autonomía y en la expresión creativa, facilitando un entorno que promueva ideas innovadoras y su implementación.</p>
        </div>
        <div className="section-image">
          <img src="https://cdn.pixabay.com/photo/2019/02/26/11/33/chef-4021817_960_720.jpg" alt="Valores" />
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
