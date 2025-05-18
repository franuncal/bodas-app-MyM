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
  "/img/g01.webp",
  "/img/g02.webp",
  "/img/g03.webp",
  "/img/g04.webp",
  "/img/g05.webp",
  "/img/g06.webp",
  "/img/g07.webp",
];

function App() {
  return (
    <div>
      <Hero imageUrl="/img/g01.webp" />
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
