import React from "react";
import "./header.css";
import stress from "../../assets/stress.png";

export default function Header() {
  return (
    <div className="fs__header section__padding" id="home">
      <div className="fs__header-content">
        <h1 className="gradient__text">
          ¡Supera el estrés laboral con nuestro workshop de movilidad!
        </h1>
        <p>
          En este evento de 20 minutos, te enseñaremos diversas técnicas para
          relajarte y liberar tensiones mientras pasas horas frente al monitor.
          Nuestro objetivo es que logres resultados rápidamente, por lo que
          nuestro enfoque integral y evaluación intensa garantizan la máxima
          eficiencia en tu tratamiento.
        </p>
        <div className="fs__header-content__input">
          <input type="email" placeholder="Ingresa tu email..." />
          <button type="button">Anotarme</button>
        </div>
        <div className="fs__header-content__people">
          <p>Decenas de personas ya probaron el Workshop!</p>
        </div>
      </div>
      <div className="fs__header-image">
        <img src={stress} alt="ai" />
      </div>
    </div>
  );
}
