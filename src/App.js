import { useState } from "react";
import "./App.css";
import { Footer, Features, AboutUs, Header, Blog } from "./containers";
import { CTA, Navbar } from "./components";
import esTranslations from "./translations/es";
import enTranslations from "./translations/en";

export default function App() {
  const [language, setLanguage] = useState("es");
  const translations = language === "es" ? esTranslations : enTranslations;

  const changeLanguage = (translations) => {
    setLanguage(translations === esTranslations ? "es" : "en");
  };

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar
          changeLanguage={changeLanguage}
          translations={translations}
          esTranslations={esTranslations}
          enTranslations={enTranslations}
        />
        <Header
          changeLanguage={changeLanguage}
          translations={translations}
          esTranslations={esTranslations}
          enTranslations={enTranslations}
        />
      </div>
      <AboutUs
        changeLanguage={changeLanguage}
        translations={translations}
        esTranslations={esTranslations}
        enTranslations={enTranslations}
      />
      <Features
        changeLanguage={changeLanguage}
        translations={translations}
        esTranslations={esTranslations}
        enTranslations={enTranslations}
      />
      <CTA
        changeLanguage={changeLanguage}
        translations={translations}
        esTranslations={esTranslations}
        enTranslations={enTranslations}
      />
      <Blog
        changeLanguage={changeLanguage}
        translations={translations}
        esTranslations={esTranslations}
        enTranslations={enTranslations}
      />
      <Footer
        changeLanguage={changeLanguage}
        translations={translations}
        esTranslations={esTranslations}
        enTranslations={enTranslations}
      />
    </div>
  );
}
