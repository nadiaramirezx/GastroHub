import '../styles/footer.css';

function Footer (){
   return (
      <footer className="pie-pagina">
  <p>Copyright © 2024 | GastroHub</p>
  <div className="iconos-redes">
    <a href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
        alt="Facebook Icono Blanco y Negro"
        width={25}
      />
    </a>
    <a href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="Instagram Icono Blanco y Negro"
        width={25}
      />
    </a>
    <a href="#">
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
        alt="Twitter Icono Blanco y Negro"
        width={25}
      />
    </a>
  </div>
</footer>

   )
}
export default Footer;