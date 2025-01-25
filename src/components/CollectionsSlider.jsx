import React from "react";
import Slider from "react-slick";

const image = [
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851356/man3_1_siysku.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851352/esther5_1_q9i5eb.jpg",
  },
  {
    img: "https://res.cloudinary.com/remmybello123/image/upload/v1735851348/boygirl4_1_o7yzgh.jpg",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

function CollectionsSlider() {
  return (
    <div className="relative cursor-pointer">
      <div className="w-full lg:h-[690px] md:h-[500px] sm:h-full overflow-hidden">
        <Slider {...settings} className="">
          {image.map((ima, index) => (
            <div key={index} className="h-full">
              <img src={ima.img} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute bottom-0 left-0 ml-5 mb-12">
        <div className="font-second font-bold text-white text-2xl lg:block md:block sm:hidden">
          COLLECTIONS
        </div>
      </div>
    </div>
  );
}

export default CollectionsSlider;
