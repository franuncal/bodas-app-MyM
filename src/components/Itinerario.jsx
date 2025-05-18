import React from "react";
import "../styles/Itinerario.css";
import {
  Church,
  GlassWater,
  UtensilsCrossed,
  PartyPopper,
  Wine,
} from "lucide-react";

const Itinerario = () => {
  return (
    <section className="itinerario">
      {/* <h2 className="itinerario-titulo">Itinerario</h2> */}

      <div className="itinerario-item">
        <Church className="itinerario-icono" />
        <p className="itinerario-label">Ceremonia</p>
        <p className="itinerario-hora">17:00 hs</p>
      </div>

      <hr />

      <div className="itinerario-item">
        <Wine className="itinerario-icono" />
        <p className="itinerario-label">Recepción</p>
        <p className="itinerario-hora">18:30 hs</p>
      </div>

      <hr />

      <div className="itinerario-item">
        <UtensilsCrossed className="itinerario-icono" />
        <p className="itinerario-label">Cena</p>
        <p className="itinerario-hora">21:00 hs</p>
      </div>

      <hr />

      <div className="itinerario-item">
        <PartyPopper className="itinerario-icono" />
        <p className="itinerario-label">Fiesta</p>
        <p className="itinerario-hora">23:00 hs</p>
      </div>
    </section>
  );
};

export default Itinerario;
