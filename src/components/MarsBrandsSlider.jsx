import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851346/boygirl3_1_hcv7rl.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851625/esther3_1_xv8j1g.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851345/boygirl_1_tndhig.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851352/esther5_1_q9i5eb.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851358/man4_1_nmjced.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 350,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
};

function MarsBrandsSlider() {
  return (
    <div className="relative cursor-pointer lg:block md:hidden sm:hidden">
      <div className="w-full lg:h-[690px] md:h-[560px] sm:h-full overflow-hidden">
        <Slider {...settings} className="w-full h-full">
          {image.map((ima, index) => (
            <div key={index} className="h-full">
              <img src={ima.img} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-0 left-0 ml-5 mb-12">
        <div className="font-second font-bold text-white text-2xl">
          BRANDS CURATED BY MARS
        </div>
      </div>
    </div>
  );
}

export default MarsBrandsSlider;
