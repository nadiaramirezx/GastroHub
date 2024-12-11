import React from 'react';
import '../styles/Header_dos.css'
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function Header_dos() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/LoginPage"); //redireccion al login
    };
    const handleAbout =() => {
      navigate("/About_us");
    };
    const handleHome = () =>{
      navigate("/");
    };
    const handleSignUp = () => {
      navigate("/Sign_up");
    }


    return (
      <header id="header">
      <div className="container">
          <nav className="nav">
          <button
        type="button"
        className="nav"
        aria-current="page"
        onClick={handleHome}>Home
          </button>
          <button
        type="button"
        className="nav"
        aria-current="page"
        onClick={handleAbout}>About
          </button>
          </nav>
        {/*logo*/}
        <div className="logo">
          <img
          src={logo} />
        </div>
        {/*botones*/}
        <div className="buttons">
        <button
        type="button"
        className="btn join"
        onClick={handleSignUp}  //al hacer clic, se registra//
        >
        Join Us
      </button>
      <button
        type="button"
        className="btn sign-in"
        onClick={handleGetStarted}  //al hacer clic, inicia sesion//
        >
        Login
      </button>
        </div>
    </div>
    <script src="script.js"></script>
      </header>
     

      )
}

export default Header_dos;


 