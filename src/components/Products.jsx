import React from "react";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <div className=" bg-white">
      <a href="#">
        <img
          className="sm:px-3 px-8 pt-8 pb-2 rounded-t-lg"
          src={product.category.image}
          alt="product image"
        />
      </a>
      <div className="sm:px-4 px-8 ">
        <a href="#">
          <h5 className="sm:text-md md:text-lg  lg:text-lg  font-light tracking-normal dark:text-[black] ">
            BLANK HEAVYWEIGHT TEE - WHITE
          </h5>
        </a>
        <div className="">
          <div className="sm:text-md md:text-lg lg:text-lg  font-second text-gray-900 dark:black">
            ₵ {product.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
