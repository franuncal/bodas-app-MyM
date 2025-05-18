import React from "react";
import "../styles/Playlist.css";

const Playlist = () => {
  return (
    <section className="playlist-section">
      <h2 className="playlist-title">¿QUÉ CANCIONES NO PUEDEN FALTAR?</h2>
      <p className="playlist-subtitle">
        Ayudanos a armar nuestra lista en Spotify
      </p>
      <a
        href="https://forms.gle/tu-enlace-aqui"
        target="_blank"
        rel="noopener noreferrer"
        className="playlist-button"
      >
        AGREGÁ CANCIONES
      </a>
    </section>
  );
};

export default Playlist;
