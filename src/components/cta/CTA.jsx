import React from "react";
import "./cta.css";

const CTA = ({
  changeLanguage,
  translations,
  esTranslations,
  enTranslations,
}) => {
  return (
    <div className="fs__cta">
      <div className="fs__cta-content">
        <p>{translations.pCTA}</p>
        <h3>{translations.titleCTA}</h3>
      </div>
      <div className="fs__cta-btn">
        <button type="button">
          <a href="#home">{translations.linkCTA}</a>
        </button>
      </div>
    </div>
  );
};

export default CTA;
