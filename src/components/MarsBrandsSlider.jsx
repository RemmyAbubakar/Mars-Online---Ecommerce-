import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "/images/esther2 (1).jpg",
  },
  {
    img: "/images/man3 (1).jpg",
  },
  {
    img: "/images/esther5 (1).jpg",
  },
  {
    img: "/images/boygirl3 (1).jpg",
  },
  {
    img: "/images/boygirl (1).jpg",
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
    <div className="relative cursor-pointer">
      <div className="w-full lg:h-[690px] md:h-[560px] sm:h-[570px] overflow-hidden">
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
