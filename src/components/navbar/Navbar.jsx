import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const Menu = () => (
    <>
      <p>
        <a href="#home">Inicio</a>
      </p>
      <p>
        <a href="#aboutus">Sobre nosotros</a>
      </p>
      <p>
        <a href="#features">¿Qué ofrecemos?</a>
      </p>
      <p>
        <a href="#profesionales">Nuestros profesionales</a>
      </p>
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="fs__navbar">
      <div className="fs__navbar-links">
        <div className="fs__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="fs__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="fs__navbar-sign">
        <p>
          <a href="#home">Inscribite</a>
        </p>
        <button type="button">
          <a href="https://wa.me/+5492235223748">Contactanos</a>
        </button>
      </div>
      <div className="fs__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="fs__navbar-menu_container scale-up-center">
            <div className="fs__navbar-menu_container-links">
              <Menu />
              <div className="fs__navbar-menu_container-links-sign">
                <p>Inscribite</p>
                <button type="button">Contactanos</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
