import React from "react";
import '../styles/comentsSection.css'

function Comentsection (){
   return(
<section className="testimonials-container">
  <h2 className="testimonials-title">
    Agregado por los{" "}
    <span className="testimonials-title-highlight">usuarios.</span>
  </h2>
  <div className="testimonials-grid">
    <article className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-stars">
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star empty" aria-hidden="true">
            ☆
          </span>
        </div>
        <p className="testimonial-text">
          loremp ipsum dfi hjuha lloremp ipsum dfi hjuhal loremp ipsum dfi
          hjuhal
        </p>
        <div className="testimonial-user">
          <div className="testimonial-avatar">MG</div>
          <span className="testimonial-name">Marco G</span>
        </div>
      </div>
    </article>
    <article className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-stars">
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star empty" aria-hidden="true">
            ☆
          </span>
        </div>
        <p className="testimonial-text">
          loremp ipsum dfi hjuha lloremp ipsum dfi hjuhal loremp ipsum dfi
          hjuhal
        </p>
        <div className="testimonial-user">
          <div className="testimonial-avatar">DR</div>
          <span className="testimonial-name">Diana R</span>
        </div>
      </div>
    </article>
    <article className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-stars">
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star filled" aria-hidden="true">
            ★
          </span>
          <span className="star empty" aria-hidden="true">
            ☆
          </span>
        </div>
        <p className="testimonial-text">
          loremp ipsum dfi hjuha lloremp ipsum dfi hjuhal loremp ipsum dfi
          hjuhal
        </p>
        <div className="testimonial-user">
          <div className="testimonial-avatar">LP</div>
          <span className="testimonial-name">Liam P</span>
        </div>
      </div>
    </article>
  </div>
</section>
   )


}

export default Comentsection;