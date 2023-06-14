import React from "react";
import "./features.css";
import { Feature } from "../../components";

export default function Features({
  changeLanguage,
  translations,
  esTranslations,
  enTranslations,
}) {
  const featuresData = [
    {
      title: translations.titleFeaturesRespiración,
      text: translations.textFeaturesRespiración,
    },
    {
      title: translations.titleFeaturesMovimiento,
      text: translations.textFeaturesMovimiento,
    },
    {
      title: translations.titleFeaturesElongación,
      text: translations.textFeaturesElongación,
    },
    {
      title: translations.titleFeaturesFortalecimiento,
      text: translations.textFeaturesFortalecimiento,
    },
  ];
  const toggleLanguage = () => {
    const newTranslations =
      translations === esTranslations ? enTranslations : esTranslations;
    changeLanguage(newTranslations);
  };
  return (
    <div className="fs__features section__padding" id="features">
      <div className="fs__features-heading">
        <h1 className="gradient__text">{translations.titleFeatures}</h1>
        <p>{translations.subtitleFeatures}</p>
      </div>
      <div className="fs__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
}
