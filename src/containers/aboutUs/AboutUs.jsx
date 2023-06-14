import React from "react";
import "./aboutus.css";
import Feature from "../../components/feature/Feature";

export default function AboutUs({
  changeLanguage,
  translations,
  esTranslations,
  enTranslations,
}) {
  const toggleLanguage = () => {
    const newTranslations =
      translations === esTranslations ? enTranslations : esTranslations;
    changeLanguage(newTranslations);
  };
  return (
    <div className="fs__whatfs section__margin" id="aboutus">
      <div className="fs__whatfs-features">
        <Feature title={translations.about} text={translations.textAboutUs} />
      </div>
      <div className="fs__whatfs-heading">
        <h1 className="gradient__text">{translations.titleAboutUs}</h1>
        <p>{translations.subtitleAboutUs}</p>
      </div>
      <div className="fs__whatfs-container">
        <Feature
          title={translations.sencilloAboutUs}
          text={translations.sencilloAboutUsText}
        />
        <Feature
          title={translations.modernoAboutUs}
          text={translations.modernoAboutUsText}
        />
        <Feature
          title={translations.confiableAboutUs}
          text={translations.confiableAboutUsText}
        />
      </div>
    </div>
  );
}
