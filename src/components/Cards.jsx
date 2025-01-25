import React from "react";
import { ImagesData } from "./ImagesData";

function Cards() {
  return (
    <div className="font-rem font-medium grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center lg:px-12 md:px-10 sm:px-1 mb-5">
      {ImagesData.map((item, index) => (
        <div className=" bg-white" key={index}>
          <a href="#">
            <img
              className="sm:px-3 px-8 pt-8 pb-2 rounded-t-lg"
              src={item.image}
              alt="product image"
            />
          </a>
          <div className="sm:px-4 px-8">
            <a href="#">
              <h5 className="sm:text-md md:text-lg lg:text-lg tracking-wider text-gray-600 flex justify-center">
                {item.title}
              </h5>
            </a>
            <div className="mt-2">
              <div className="sm:text-md md:text-lg lg:text-md dark:black lg:ml-9 md:ml-9 ">
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
