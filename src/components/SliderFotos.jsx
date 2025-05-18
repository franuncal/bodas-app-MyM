import React from "react";
import Slider from "react-slick";
import "../styles/SliderFotos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderFotos = ({ imagenes }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3, // Mostrar 3 imágenes en escritorio
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider-fotos">
      <Slider {...settings}>
        {imagenes.map((img, index) => (
          <div key={index} className="slider-img-wrapper">
            <img src={img} alt={`Foto ${index + 1}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderFotos;
