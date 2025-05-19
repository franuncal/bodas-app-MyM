import React, { useState } from "react";
import "../styles/Regalos.css";
import { Gift } from "lucide-react";

const Regalos = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="regalos">
      <Gift className="regalos-icon" />
      <h2 className="regalos-title">REGALOS</h2>
      <p className="regalos-text">
        Lo importante es que compartas este día con nosotros, pero si querés
        hacernos un regalo, ¡te lo agradecemos mucho!
      </p>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Regalar
      </button>

      {isOpen && (
        <div className="regalos-modal">
          <div className="regalos-modal-content">
            <h3>Agradecemos cualquier contribución ❤️</h3>
            <div className="alias-box">
              <span className="alias-label">ALIAS:</span>
              <span className="alias-text">BODAMARIAYMATIAS</span>
              <button
                className="btn"
                onClick={() => {
                  navigator.clipboard.writeText("FRANUNCAL");
                  alert("Alias copiado al portapapeles");
                }}
              >
                Copiar
              </button>
            </div>
            <p>¡Muchas gracias por tu amor!</p>
            <button onClick={() => setIsOpen(false)} className="btn">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Regalos;
