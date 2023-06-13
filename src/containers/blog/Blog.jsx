import React from "react";
import "./blog.css";
import { santiago, pruebajuanpablo, guissepe, xander } from "./imports.js";

export default function Blog() {
  const professionals = [
    {
      id: "santiago",
      imgUrl: santiago,
      name: "Santiago Robetto",
      title:
        "Fisioterapeuta y Osteópata\nCertificación Functional Movement Screen nivel 1 y 2.\nFormación en Diagnóstico y Terapia Mecánica (Método Mckenzie).\nFormación en concepto Mulligan.",
    },
    {
      id: "juanpablo",
      imgUrl: pruebajuanpablo,
      name: "Juan Pablo Mussini",
      title:
        "Licenciado en Kinesiología\nPostgrado en Kinesiología del Deporte.\nStaff Médico del Equipo Paralímpico Argentino.",
    },
    {
      id: "guissepeleo",
      imgUrl: guissepe,
      name: "Guissepe Leo",
      title:
        "Laureato in Scienze Motorie\nPersonal Trainer certificato ELAV\nFondatore ASD FITHOMELESS\nAl massimo si può aggiungere che ho lavorato per Virgin Active per 3 anni",
    },
    {
      id: "xander",
      imgUrl: xander,
      name: "Xander Rodrigo Morejon",
      title:
        "Athletic Background Calisthenics\nKILO Strength Society Level 2\nMax Strength Certified Coach\nUSA Olympic Weightlifting Level 1 Coach \nDBC Fitness Level 2 Coach:\nProgram Design, Biomechanics, and orthopedic measurements \nFunctional Range Conditioning Certified\nKinstretch Certified\nPrecision Nutrition Level 1",
    },
  ];

  return (
    <div className="fs__blog section__padding" id="profesionales">
      <div className="fs__blog-heading">
        <h1 className="gradient__text">Nuestros profesionales</h1>
      </div>
      <div className="fs__blog-container">
        {professionals.map((professional) => (
          <div key={professional.id} className="fs__blog-container_card">
            <img
              className="fs__blog-container_card-image"
              src={professional.imgUrl}
              alt="Professional"
            />
            <div className="fs__blog-container_card-content">
              <div className="fs__blog-container_card-name">
                {professional.name}
              </div>
              <p className="fs__blog-container_card-title">
                {professional.title.split("\n").map((sentence, index) => (
                  <React.Fragment key={index}>
                    {sentence}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
