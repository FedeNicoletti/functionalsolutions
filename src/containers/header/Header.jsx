import React, { useState } from "react";
import "./header.css";
import stress from "../../assets/stress.png";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Header() {
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
      setError("Por favor, ingresa un correo electrónico válido.");
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
          <button type="button" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Enviando..." : "Anotarme"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <p>Primera participación ¡GRATUITA!</p>
      </div>
      <div className="fs__header-image">
        <img src={stress} alt="ai" />
      </div>
    </div>
  );
}
