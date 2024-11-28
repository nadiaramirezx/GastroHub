import React from 'react';
import '../styles/Header.css';
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function Header_dos() {
    const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/LoginPage"); //redireccion al login
    };


    return (
      <nav className="navbar bg-[#dd929233] p-2">
  <div className="navbar-container flex items-center justify-between mx-auto">
    {/*logo*/}
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img
        src={logo}
        className="navbar-logo w-36 h-36"
        alt="Flowbite Logo"
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
      
      </span>
    </a>
    {/*boton*/}
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      
      {/*menu de nav*/}
    </div>
    <div
  className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 navbar-container"
  id="navbar-cta"
>
  <ul className="navbar-list flex flex-col font-medium p-4 md:p-0 mt-4 navbar-items md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#ff3385] md:dark:bg-[#ff6699] dark:border-[#ff3385]">
    <li>
      <a
        href=""
        className="navbar-item block py-2 px-3 md:p-0"
        aria-current="page"
      >
        Inicio
      </a>
    </li>
    <li>
      <a
        href="/about"
        className="navbar-item block py-2 px-3 md:p-0"
      >
        Mi Recetario
      </a>
    </li>
    <li>
      <a
        href="#"
        className="navbar-item block py-2 px-3 md:p-0"
      >
        Categorias
      </a>
    </li>

  </ul>
</div>

  </div>
</nav>

      )
}

export default Header_dos;


 