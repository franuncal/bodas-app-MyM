import React from "react";
import "../styles/Frase.css";

const Frase = ({ texto }) => {
  return (
    <section className="frase">
      <div className="frase-linea" />
      <p className="frase-texto">{texto}</p>
      <div className="frase-linea" />
    </section>
  );
};

export default Frase;
