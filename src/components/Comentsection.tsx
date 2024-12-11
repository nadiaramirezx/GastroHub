import React from "react";
import '../styles/comentsSection.css'

function Comentsection (){ 
  return(
<section className="testimonials-container">
 <h2 className="testimonials-title">
   Agregado por los{" "}
   <span className="testimonials-title-highlight">usuarios.</span>
 </h2>
 <div className="background"></div>
 <div className="grid">
   <div>
     <article className="card">
       <div className="testimonial">
         <div className="testimonial-header">
           <img src="https://cdn-icons-png.flaticon.com/512/681/681392.png" alt="User Image" className="testimonial-image"/>
           <div className="testimonial-info">
             <h3 className="testimonial-name">Alberto Durante</h3>
             <p className="testimonial-position">Estudiante de Gastronomia</p>
           </div>
         </div>
         <div className="testimonial-body">
           <p>"Cuando me encontraba en una encrucijada en mi carrera, esta empresa me brindó la guía y el apoyo que necesitaba. Su experiencia y compromiso son evidentes en cada paso del camino. Ahora, no solo he alcanzado mis objetivos, sino que he superado mis expectativas. Estoy eternamente agradecido."</p>
         </div>
       </div>
     </article>
   </div>
   <div className="primary">
     <article className="card">
       <div className="testimonial">
         <div className="testimonial-header">
           <img src="https://cdn-icons-png.flaticon.com/512/681/681392.png" alt="User Image" className="testimonial-image"/>
           <div className="testimonial-info">
             <h3 className="testimonial-name">Alondra Arcos</h3>
             <p className="testimonial-position">Chef Gastronomo</p>
           </div>
         </div>
         <div className="testimonial-body">
           <p>"Cuando me encontraba en una encrucijada en mi carrera, esta empresa me brindó la guía y el apoyo que necesitaba. Su experiencia y compromiso son evidentes en cada paso del camino. Ahora, no solo he alcanzado mis objetivos, sino que he superado mis expectativas. Estoy eternamente agradecido."</p>
         </div>
       </div>
     </article>
   </div>
   <div>
     <article className="card">
       <div className="testimonial">
         <div className="testimonial-header">
           <img src="https://cdn-icons-png.flaticon.com/512/681/681392.png" alt="User Image" className="testimonial-image"/>
           <div className="testimonial-info">
             <h3 className="testimonial-name">Yussif Granel</h3>
             <p className="testimonial-position">Repostero</p>
           </div>
         </div>
         <div className="testimonial-body">
           <p>"Cuando me encontraba en una encrucijada en mi carrera, esta empresa me brindó la guía y el apoyo que necesitaba. Su experiencia y compromiso son evidentes en cada paso del camino. Ahora, no solo he alcanzado mis objetivos, sino que he superado mis expectativas. Estoy eternamente agradecido."</p>
         </div>
       </div>
     </article>
   </div>
 </div>
</section>
   )
}


export default Comentsection;