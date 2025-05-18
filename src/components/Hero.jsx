import React from "react";
import "../styles/Hero.css";

const Hero = ({ imageUrl }) => {
  return (
    <section className="hero">
      <img src={imageUrl} alt="Pareja" className="hero-image" />
    </section>
  );
};

export default Hero;
