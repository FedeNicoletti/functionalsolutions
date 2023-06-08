import React from "react";
import "./aboutus.css";
import Feature from "../../components/feature/Feature";

export default function AboutUs() {
  return (
    <div className="fs__whatfs section__margin" id="aboutus">
      <div className="fs__whatfs-features">
        <Feature
          title="Sobre nosotros"
          text=" Dirigido por el Licenciado Santiago Robetto, Kinesiólogo Mat. N7465, este workshop te brindará las herramientas necesarias para hacer frente al estrés laboral y mejorar tu bienestar en el entorno de trabajo. No importa cuánto tiempo lleves lidiando con la presión diaria, estamos aquí para ayudarte a alcanzar tus metas."
        />
      </div>
      <div className="fs__whatfs-heading">
        <h1 className="gradient__text">
          Desata Tu Potencial con el Poder de la Movilidad
        </h1>
        <p>Explorá tu cuerpo</p>
      </div>
      <div className="fs__whatfs-container">
        <Feature
          title="Sencillo"
          text="Técnicas diseñadas para revolucionar tu equilibrio entre trabajo y vida personal. Santiago te guiará a través de una base de conocimientos con estrategias prácticas e ideas clave que te ayudarán a navegar los desafíos de la vida en la oficina con facilidad."
        />
        <Feature
          title="Moderno"
          text="Creemos en el poder del aprendizaje continuo. Por eso, hemos seleccionado recursos de vanguardia para ayudarte a mantenerte ágil y en calma, en el mundo acelerado de hoy."
        />
        <Feature
          title="Confiable"
          text="A lo largo de los siglos, la evidencia ha demostrado una y otra vez que el movimiento es esencial para una vida saludable. Desde la antigüedad, nuestras culturas han abrazado la actividad física como una forma de fortalecer el cuerpo y la mente."
        />
      </div>
    </div>
  );
}
