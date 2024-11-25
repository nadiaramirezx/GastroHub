import React from "react";
import '../styles/carousel.css';
import carousel from '../assets/img/carousel.jpg'

function Carousel (){
return(
   <section className="equipo-container">
  <h2 className="title">
    Nuestro <span className="highlight">Equipo</span>
  </h2>
  {/*section de carousel*/}
  
  <div className="slider">
  <div className="slide-track">
    <div className="slide">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
        height={100}
        width={250}
        alt=""
      />
    </div>
    <div className="slide">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
        height={100}
        width={250}
        alt=""
      />
    </div>
    <div className="slide">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
        height={100}
        width={250}
        alt=""
      />
    </div>
    <div className="slide">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
        height={100}
        width={250}
        alt=""
      />
    </div>
  </div>
</div>

   </section>
   
)
}

export default Carousel;