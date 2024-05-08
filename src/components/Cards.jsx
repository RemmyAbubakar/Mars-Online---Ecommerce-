import React from "react";
import { ImagesData } from "./ImagesData";

function Cards() {
  return (
    <div className=" font-second grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center lg:px-24 md:px-16 sm:px-1">
      {ImagesData.map((item, index) => (
        <div className=" bg-white" key={index}>
          <a href="#">
            <img
              className="sm:px-3 px-8 pt-8 pb-2 rounded-t-lg"
              src={item.image}
              alt="product image"
            />
          </a>
          <div className="sm:px-4 px-8 ">
            <a href="#">
              <h5 className="sm:text-md md:text-lg  lg:text-lg  font-normal tracking-normal dark:text-[black] ">
                {item.title}
              </h5>
            </a>
            <div className="">
              <div className="sm:text-md md:text-lg lg:text-lg  font-second text-gray-900 dark:black">
                ₵185
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
