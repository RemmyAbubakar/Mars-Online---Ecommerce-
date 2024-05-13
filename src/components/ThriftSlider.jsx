import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "/images/boygirl1 (1).jpg",
  },
  {
    img: "/images/man1 (1).jpg",
  },
  {
    img: "/images/esther3 (1).jpg",
  },
  {
    img: "/images/man4 (1).jpg",
  },
  {
    img: "/images/man2 (1).jpg",
  },
];


const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

function ThriftSlider() {
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
        <div className="font-second font-bold text-white text-2xl">THRIFTS</div>
      </div>
    </div>
  );
}

export default ThriftSlider;
