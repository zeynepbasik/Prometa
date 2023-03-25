import React from "react";
import Slide1 from "./Resimler/slide1.jpg";
import Slide2 from "./Resimler/slide2.jpg";
import Slide3 from "./Resimler/slide3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Anasayfa = () => {
  const slideImages = [
    {
      slideName: Slide1,
      description: "Elektro mekanik...",
    },
    {
      slideName: Slide2,
      description: "En hızlı çözümü sunar...",
    },
    {
      slideName: Slide3,
      description: "Elektro mekanik...",
    },
  ];

  const slideProperties = {
    duration: 3500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  return (
    <div>
      <div className="slide-container relative z-10 h-full w-full">
        <Slide {...slideProperties}>
          {slideImages.map((each, index) => (
            <div className="relative z-0">
              <img
                className="h-full w-full "
                key={index}
                src={each.slideName}
              ></img>
              <div className=" absolute top-10 left-10 font-serif italic text-white lg:top-20 lg:left-20">
                <h3 className="text-4xl">Prometa Group</h3>
                <p className="text-xl">{each.description}</p>
              </div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="flex w-full justify-around">
        <button className="h-20 w-20">ilker</button>
        <button className="h-20 w-20">gürkan</button>
        <button className="h-20 w-20">murat</button>
      </div>
    </div>
  );
};

export default Anasayfa;
