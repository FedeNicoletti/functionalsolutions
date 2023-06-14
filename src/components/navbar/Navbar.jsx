import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar({
  changeLanguage,
  translations,
  esTranslations,
  enTranslations,
}) {
  const Menu = () => (
    <>
      <p>
        <a href="#home">{translations.home}</a>
      </p>
      <p>
        <a href="#aboutus">{translations.about}</a>
      </p>
      <p>
        <a href="#features">{translations.offer}</a>
      </p>
      <p>
        <a href="#profesionales">{translations.professionals}</a>
      </p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleLanguage = () => {
    const newTranslations =
      translations === esTranslations ? enTranslations : esTranslations;
    changeLanguage(newTranslations);
  };

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
        <button type="button" onClick={toggleLanguage}>
          {translations === esTranslations ? "EN" : "ES"}
        </button>
        <p>
          <a href="#home">{translations.signUp}</a>
        </p>

        <button type="button">
          <a href="https://wa.me/+5492235223748">{translations.contactUs}</a>
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
                <button type="button" onClick={toggleLanguage}>
                  {translations === esTranslations ? "EN" : "ES"}
                </button>
                <p>{translations.signUp}</p>
                <button type="button">{translations.contactUs}</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
