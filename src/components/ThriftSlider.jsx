import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851350/boygirl6_1_hgsfqi.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851354/man1_1_mlmede.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851358/man4_1_nmjced.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851623/esther2_1_usqesh.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851627/esther4_1_j3lhox.jpg",
  },
];


const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
};

function ThriftSlider() {
  return (
    <div className="relative cursor-pointer lg:block md:block sm:hidden">
      <div className="w-full lg:h-[690px] md:h-[500px] sm:h-full overflow-hidden">
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
