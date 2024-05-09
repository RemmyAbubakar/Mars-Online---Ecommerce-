import React from "react";
import Fade from "react-reveal/Fade";

function ImageSlider() {
  return (
    <div>
      <Fade top>
        <div className="w-full lg:block md:block sm:hidden">
          <img
            src="/images/wallpaper (1).jpg"
            alt="Description of image"
            className="w-full"
          />
        </div>
      </Fade>

      <Fade top>
        <div className="hidden lg:hidden md:hidden sm:block">
          <img
            src="/images/boygirl3 (1).jpg"
            alt="Description of image"
            className="w-full"
          />
        </div>
      </Fade>
    </div>
  );
}

export default ImageSlider;
