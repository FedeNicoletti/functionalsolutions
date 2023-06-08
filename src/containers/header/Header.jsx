import React, { useState } from "react";
import mailchimp from "mailchimp-api-v3";
import "./header.css";
import stress from "../../assets/stress.png";
import dotenv from "dotenv";
dotenv.config();

export default function Header() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

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
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      const apiKey = process.env.APIKEY_MAILCHIMP;
      const listId = process.env.AUDIENCE_ID;

      const mc = new mailchimp(apiKey);

      // Agregar el email a la audiencia de Mailchimp
      await mc.post(`/lists/${listId}/members`, {
        email_address: email,
        status: "subscribed",
      });

      console.log("Email guardado exitosamente en Mailchimp.");
      setEmail("");
      setError("");
    } catch (error) {
      console.error("Error al guardar el email en Mailchimp:", error);
      setError(
        "Hubo un error al guardar el correo electrónico. Por favor, inténtalo de nuevo más tarde."
      );
    }
  };

  return (
    <div className="fs__header section__padding" id="home">
      <div className="fs__header-content">
        <h1 className="gradient__text">
          ¡Supera el estrés laboral con nuestro workshop de movilidad!
        </h1>
        <p>
          En este evento de 20 minutos, te enseñaremos diversas técnicas para
          relajarte y liberar tensiones mientras pasas horas frente al monitor.
          Nuestro objetivo es que logres resultados rápidamente, por lo que
          nuestro enfoque integral y evaluación intensa garantizan la máxima
          eficiencia en tu tratamiento.
        </p>
        <div className="fs__header-content__input">
          <input
            type="email"
            placeholder="Ingresa tu email..."
            value={email}
            onChange={handleEmailChange}
          />
          <button type="button" onClick={handleSubmit}>
            Anotarme
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
      <div className="fs__header-image">
        <img src={stress} alt="ai" />
      </div>
    </div>
  );
}
