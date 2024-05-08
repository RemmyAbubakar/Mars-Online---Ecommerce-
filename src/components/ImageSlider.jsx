import React from "react";

function ImageSlider() {
  return (
    <div>
      <img
        class="w-full lg:block md:block sm:hidden "
        src="/images/wallpaper (1).jpg"
        alt="Description of image"
      />
      <img
        class="hidden lg:hidden md:hidden sm:block w-full"
        src="/images/boygirl3 (1).jpg"
        alt="Description of image"
      />
    </div>
  );
}

export default ImageSlider;
