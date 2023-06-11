import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => (
  <div className="fs__footer section__padding">
    <div className="fs__footer-heading">
      <h1 className="gradient__text">
        ¿Querés decirle basta al estrés en el trabajo?
      </h1>
    </div>

    <div className="fs__footer-btn">
      <p>
        <a href="#home">Solicitá tu link de acceso</a>
      </p>
    </div>

    <div className="fs__footer-links">
      <div className="fs__footer-links_logo">
        <img src={logo} alt="fs_logo" />
        <p>Functional Solutions</p>
        <p>
          Argentina, Buenos Aires <br /> Todos los derechos reservados
        </p>
      </div>
      <div className="fs__footer-links_div">
        <h4>Links</h4>
        <p>
          <a href="https://www.instagram.com/functional.solutions/">
            Instagram
          </a>
        </p>
        <p>
          {" "}
          <a href="https://www.linkedin.com/company/funcional-solutions/">
            LinkedIN
          </a>
        </p>
        <p>
          <a href="https://www.youtube.com/@Functional.Solutions">YouTube</a>
        </p>
      </div>
      <div className="fs__footer-links_div">
        <h4>Functional Solutions</h4>
        <p>Terminos y Condiciones </p>
        <p>Política de Privacidad</p>
        <p>
          <a href="https://wa.me/+5492235223748">Contactanos</a>
        </p>
      </div>
      <div className="fs__footer-links_div">
        <h4>Contactanos</h4>
        <p>Argentina, Buenos Aires</p>
        <p>+54 223 5223748</p>
        <p>telerehabfs@gmail.com</p>
      </div>
    </div>

    <div className="fs__footer-copyright">
      <p>@2023 federico-nicoletti. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;
