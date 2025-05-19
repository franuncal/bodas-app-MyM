import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-copy">© 2025 - Unqui Dev </p>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/unquidevs/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/2324509499?text=Hola! Me comunico desde la página web de Bodas.Click. Quiero recibir más información."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Whatsapp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
