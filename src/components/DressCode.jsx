import React, { useState } from "react";
import "../styles/DressCode.css";
import { Gem } from "lucide-react";

const DressCode = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="dresscode">
      <Gem className="dresscode-icon" />
      <h2 className="dresscode-title">DRESS CODE</h2>
      <p className="dresscode-subtitle">Elegante</p>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Consejos de vestimenta
      </button>

      {isOpen && (
        <div className="dresscode-modal">
          <div className="dresscode-modal-content">
            <h3>Consejos para vestirse</h3>
            <p>
              <strong>Hombres:</strong> Traje oscuro, camisa, corbata o moño.
            </p>
            <p>
              <strong>Mujeres:</strong> Vestido de fiesta, largo o midi, o
              conjunto elegante.
            </p>
            <button onClick={() => setIsOpen(false)} className="btn">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DressCode;
