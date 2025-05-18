import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Frase from "./components/Frase";
import SliderFotos from "./components/SliderFotos";
import InfoEvento from "./components/infoEvento";
import Itinerario from "./components/Itinerario";
import DressCode from "./components/DressCode";
import Regalos from "./components/Regalos";
import RSVP from "./components/RSVP";
import Hashtag from "./components/Hashtag";
import Playlist from "./components/Playlist";
import BannerFinal from "./components/BannerFinal";
import Footer from "./components/Footer";

const imagenes = [
  "/img/galeria01.jpg",
  "/img/galeria02.jpg",
  "/img/galeria03.jpg",
  "/img/galeria04.jpg",
  "/img/galeria12.jpg",
  "/img/galeria13.jpg",
  "/img/galeria14.JPEG",
];

function App() {
  return (
    <div>
      <Hero imageUrl="/img/galeria01.jpg" />
      <Countdown targetDate="2025-12-20T16:00:00" />
      <Frase texto={"El amor no mira con los ojos, sino con el alma."} />
      <InfoEvento />
      <SliderFotos imagenes={imagenes} />
      <Itinerario />
      <SliderFotos imagenes={imagenes} />
      <DressCode />
      <Regalos />
      <RSVP />
      <SliderFotos imagenes={imagenes} />
      <Hashtag />
      <Playlist />
      <BannerFinal />
      <Footer />
    </div>
  );
}

export default App;
