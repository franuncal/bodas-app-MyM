import React from "react";
import { Camera } from "lucide-react";
import "../styles/Hashtag.css";

const Hashtag = () => {
  return (
    <section className="hashtag-section">
      <Camera className="hashtag-icon" size={40} />
      <h2>QUEREMOS VER TUS FOTOS</h2>
      <p>
        Pueden usar nuestro <strong>#</strong> en todas sus publicaciones de
        Instagram:
      </p>
      <p className="hashtag-text">#CASORIOM&M</p>
    </section>
  );
};

export default Hashtag;
