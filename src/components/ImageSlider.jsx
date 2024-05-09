import React from "react";
import Fade from "react-reveal/Fade";

function ImageSlider() {
  return (
    <div>
      
        <div className="w-full lg:block md:block sm:hidden">
        <Fade top>
          <img
            src="/images/wallpaper (1).jpg"
            alt="Description of image"
            className="w-full"
          />
          </Fade>
        </div>
      

      <div className="hidden lg:hidden md:hidden sm:block">
        <Fade top>
          <img
            src="/images/boygirl3 (1).jpg"
            alt="Description of image"
            className="w-full"
          />
        </Fade>
      </div>
    </div>
  );
}

export default ImageSlider;
