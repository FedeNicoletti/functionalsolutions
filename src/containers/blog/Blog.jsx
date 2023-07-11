import React from "react";
import "./blog.css";
import {
  santiago,
  pruebajuanpablo,
  guissepe,
  xander,
  espana,
  italia,
  eeuu,
} from "./imports.js";

export default function Blog({ translations }) {
  const professionals = [
    {
      id: "santiago",
      imgUrl: santiago,
      name: "Santiago Robetto",
      title:
        "Fisioterapeuta y Osteópata\nCertificación Functional Movement Screen nivel 1 y 2.\nFormación en Diagnóstico y Terapia Mecánica (Método Mckenzie).\nFormación en concepto Mulligan.",
      imgFlagUrl: espana,
      imgFlagUrl3: italia,
      imgFlagUrl2: eeuu,
    },
    {
      id: "juanpablo",
      imgUrl: pruebajuanpablo,
      name: "Juan Pablo Mussini",
      title:
        "Licenciado en Kinesiología\nPostgrado en Kinesiología del Deporte.\nStaff Médico del Equipo Paralímpico Argentino.",
      imgFlagUrl: espana,
      imgFlagUrl2: eeuu,
    },
    {
      id: "guissepeleo",
      imgUrl: guissepe,
      name: "Giussepe Leo",
      title:
        "Laureato in Scienze Motorie\nPersonal Trainer certificato ELAV\nFondatore ASD FITHOMELESS\nVirgin Active per 3 anni",
      imgFlagUrl3: italia,
      imgFlagUrl2: eeuu,
    },
    {
      id: "xander",
      imgUrl: xander,
      name: "Xander Rodrigo Morejon",
      title:
        "Athletic Background Calisthenics\nKILO Strength Society Level 2\nMax Strength Certified Coach\nUSA Olympic Weightlifting Level 1 Coach \nDBC Fitness Level 2 Coach:\nProgram Design, Biomechanics, and orthopedic measurements \nFunctional Range Conditioning Certified\nKinstretch Certified\nPrecision Nutrition Level 1",
      imgFlagUrl: espana,
      imgFlagUrl2: eeuu,
    },
  ];

  return (
    <div className="fs__blog section__padding" id="profesionales">
      <div className="fs__blog-heading">
        <h1 className="gradient__text">{translations.professionals}</h1>
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
              <div className="fs__blog-container_card-languages">
                {professional.imgFlagUrl && (
                  <img
                    src={professional.imgFlagUrl}
                    alt="ProfessionalLanguages"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      margin: "0.5rem 0.5rem 0 0",
                    }}
                  />
                )}
                {professional.imgFlagUrl2 && (
                  <img
                    src={professional.imgFlagUrl2}
                    alt="ProfessionalLanguages"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      margin: "0.5rem 0.5rem 0 0",
                    }}
                  />
                )}
                {professional.imgFlagUrl3 && (
                  <img
                    src={professional.imgFlagUrl3}
                    alt="ProfessionalLanguages"
                    style={{
                      height: "2rem",
                      width: "2rem",
                      margin: "0.5rem 0.5rem 0 0",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
