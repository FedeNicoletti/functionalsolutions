import React, { useState } from "react";
import "./header.css";
import stress from "../../assets/stress.png";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Header({
  changeLanguage,
  translations,
  esTranslations,
  enTranslations,
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    if (!email) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }

    try {
      setSubmitting(true);

      // Agregar el nuevo documento a la colección "suscribers"
      await addDoc(collection(db, "emails"), {
        email: email,
        timestamp: serverTimestamp(),
      });

      console.log("Email guardado exitosamente en Firebase.");
      setEmail("");
      setError("");
      setSubmitting(false);
    } catch (error) {
      console.error("Error al guardar el email en Firebase:", error);
      setError(
        "Hubo un error al guardar el correo electrónico. Por favor, inténtalo de nuevo más tarde."
      );
      setSubmitting(false);
    }
  };

  const toggleLanguage = () => {
    const newTranslations =
      translations === esTranslations ? enTranslations : esTranslations;
    changeLanguage(newTranslations);
  };

  return (
    <div className="fs__header section__padding" id="home">
      <div className="fs__header-content">
        <h1 className="gradient__text">{translations.titleHeader}</h1>
        <p>{translations.subtitleHeader}</p>
        <div className="fs__header-content__input">
          <input
            type="email"
            placeholder={translations.inputHeader}
            value={email}
            onChange={handleEmailChange}
          />
          <button type="button" onClick={handleSubmit} disabled={submitting}>
            {submitting
              ? translations.buttonSendingHeader
              : translations.buttonHeader}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <p style={{ fontSize: "30px" }}>{translations.textUnderInputHeader}</p>
      </div>
      <div className="fs__header-image">
        <img src={stress} alt="ai" />
      </div>
    </div>
  );
}
