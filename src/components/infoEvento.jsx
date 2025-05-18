import React from "react";
import "../styles/InfoEvento.css";
import { CalendarHeart, MapPin } from "lucide-react";

const InfoEvento = () => {
  return (
    <section className="info-evento">
      {/* <h2 className="info-titulo">Información del Evento</h2> */}

      <div className="info-grid">
        <div className="info-item">
          <CalendarHeart className="info-icono" />
          <h3 className="info-subtitulo">CUANDO ?</h3>
          <p className="info-texto">
            Sábado 21 de Septiembre de 2024 16:30 HS.
          </p>
        </div>

        <div className="info-item">
          <MapPin className="info-icono" />
          <h3 className="info-subtitulo">DONDE ?</h3>
          <p className="info-texto">ESTANCIA EL RECUERDO</p>
          <a
            href="https://maps.app.goo.gl/RTVosUDKcYe3FhJh7"
            className="btn-maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoEvento;
