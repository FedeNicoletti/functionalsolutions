import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Respiración y Meditación",
    text: "Descubre el poder de la respiración consciente y la meditación para encontrar calma y equilibrio en tu vida. Aprende técnicas y prácticas que te ayudarán a reducir el estrés, mejorar la concentración y promover la claridad mental. Sumérgete en un espacio de paz interior y descubre cómo el simple acto de respirar puede transformar tu bienestar.",
  },
  {
    title: "Movilidad articular general",
    text: "El movimiento es vida, y en este apartado nos enfocaremos en la importancia de mantener nuestras articulaciones en movimiento. Explora ejercicios y técnicas diseñados para mejorar la movilidad y flexibilidad de todo tu cuerpo. Descubre cómo liberar tensiones y mejorar tu postura a través de movimientos suaves y conscientes. Recuerda, una buena movilidad articular es clave para disfrutar de una vida activa y sin limitaciones.",
  },
  {
    title: "Elongación de zonas comprometidas",
    text: "Dirige tu atención a esas áreas del cuerpo que necesitan un cuidado especial. Aprende técnicas de elongación específicas para zonas comprometidas como cuello, espalda baja, hombros o caderas. Descubre cómo liberar la tensión acumulada y mejorar la flexibilidad en estas áreas. Convierte la elongación en una práctica regular y experimenta una mayor sensación de bienestar en tu día a día.",
  },
  {
    title: "Ejercicios de fortalecimiento",
    text: "El fortalecimiento muscular es esencial para mantener un cuerpo sano y funcional. En esta sección, nos enfocaremos en ejercicios diseñados para fortalecer diferentes grupos musculares. Desde el core hasta las piernas y brazos, descubre ejercicios efectivos y seguros que te ayudarán a mejorar tu fuerza y resistencia. A medida que fortalezcas tu cuerpo, te sentirás más enérgico, ágil y preparado para enfrentar los desafíos cotidianos.",
  },
];

export default function Features() {
  return (
    <div className="fs__features section__padding" id="features">
      <div className="fs__features-heading">
        <h1 className="gradient__text">
          Descubrí el Poder de Pensar en VOS: Respirá, Mové, Estirá y Fortalecé
          para una Vida Plena
        </h1>
        <p>Solicitá tu cupo anticipado para asegurarte un lugar!</p>
      </div>
      <div className="fs__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
}
