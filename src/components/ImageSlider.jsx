import React, {useState} from 'react'
import {SliderData} from './SliderData'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";


function ImageSlider({slides}) {
 const [current, setCurrent] = useState(0);

 const length = slides.length;

 const nextSlide = () => {
   setCurrent(current === length ? 0 : current + 1 )
 }

 const prevSlide = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
 }
 
//  if(!Array.isArray(slides) || slides.length <= 0){
//   return null;
//  }


  return (
    <div className="relative ">
      <RiArrowLeftSLine
        size={50}
        className="absolute top-[50%] left-[32px] z-10 cursor-pointer select-none"
        onClick={prevSlide}
      />
      <RiArrowRightSLine
        size={50}
        className="absolute top-[50%] right-[32px] z-10 cursor-pointer select-none"
        onClick={nextSlide}
      />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.image} alt="Shirts"/>}
          </div>
        );
      })}
    </div>
  );
}

export default ImageSlider