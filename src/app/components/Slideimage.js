// pages/index.js
import Img from ".//../../../public/slideimg.jpg"

import Slider from "./Slider";

const slides = [
  {
    image: {Img},
    alt: 'Slide 1',
  },
  {
    image: '/slide2.jpg',
    alt: 'Slide 2',
  },
  {
    image: '/slide3.jpg',
    alt: 'Slide 3',
  },
];

const Homeslide = () => {
  return (
    <div className="container mx-auto">
      <Slider slides={slides} />
    </div>
  );
};

export default Homeslide;
