import React, { useState } from "react";
import "./blog.css";
import Article from "../../components/article/Article";
import { santiago, valentina, nicolas, ezequiel, franco } from "./imports";

export default function Blog() {
  const [groupA, setGroupA] = useState([
    {
      id: "santiago",
      imgUrl: santiago,
      name: "Santiago Robetto",
      title:
        "Licenciado en Kinesiología\nCertificación FMS nivel 1 y 2.\nTécnicas osteopaticas.\nFormación en Diagnóstico y Terapia Mecánica (Método Mckenzie).\nPunción seca nivel 1 y 2.\nFormación en concepto Mulligan.",
    },
  ]);

  const [groupB, setGroupB] = useState([
    {
      id: "valentina",
      imgUrl: valentina,
      name: "Valentina Robetto",
      title:
        "Certificación internacional en antropometría, nivel 1 S.A.K.\nExperiencia en nutrición deportiva.",
    },
    {
      id: "nicolas",
      imgUrl: nicolas,
      name: "Nicolás Aguilera",
      title:
        "Especialista en psicoterapia cognitiva.\nConocimientos en psoicología deportiva.\nTrabajo interdisciplinario en deportistas de alto rendimiento.\nAbordaje online con profesionales y deportistas en España y Argentina.",
    },
    {
      id: "ezequiel",
      imgUrl: ezequiel,
      name: "Ezequiel Martín",
      title:
        "Licenciado en Nutrición\nCertificación en nutrición deportiva del Club Barcelona.\nExperto en tratamiento de obesidad.\nDiplomado en preparación deportiva.\nExperto en deportes de fuerza y resistencia.",
    },
    {
      id: "franco",
      imgUrl: franco,
      name: "Franco Montes",
      title:
        "Licenciado en Kinesiología\nCertificación FMS nivel 1 y 2.\nFormación en concepto Mulligan.\nTécnicas osteopaticas.\nPunción seca nivel 1 y 2.",
    },
  ]);

  const handleArticleClick = (id, group) => {
    if (group === "B") {
      const clickedArticle = groupB.find((article) => article.id === id);
      const previousArticle = groupA[0];
      setGroupA([clickedArticle]);
      setGroupB((prevGroupB) => [
        ...prevGroupB.filter((article) => article.id !== id),
        previousArticle,
      ]);
    }
  };

  return (
    <div className="fs__blog section__padding" id="blog">
      <div className="fs__blog-heading">
        <h1 className="gradient__text">Nuestros profesionales</h1>
      </div>
      <div className="fs__blog-container">
        <div className="fs__blog-container_groupA">
          {groupA.map((article) => (
            <Article
              key={article.id}
              article={article}
              group="A"
              handleClick={handleArticleClick}
            />
          ))}
        </div>
        <div className="fs__blog-container_groupB">
          {groupB.map((article) => (
            <Article
              key={article.id}
              article={article}
              group="B"
              handleClick={handleArticleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
