

import Swiper from "./components/Swiper";
import IntroContainer from "./components/introContainer";
import IntroBigBanner from "./components/introBigBanner";
import TestiMonials from "./components/testimonials";

import CardWithImage from "./components/cardwithimage";
import DownToUp from "./components/downtoup";



export default function Home() {
  return (
    <main>
  <Swiper/>
  <IntroContainer/>
  <IntroBigBanner/>
  
  <CardWithImage/>
  <DownToUp/>
  <TestiMonials/>
    </main>
  );
}
