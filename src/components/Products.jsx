import React from "react";
import { Link } from "react-router-dom";

function Products({ product }) {
  return (
    <div>
      <div className="font-second hover:scale-110 ease-in duration-3000">
        <div className=" max-w-sm bg-white mt-11 mb-11 ">
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src={product.category.image}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight dark:text-[black] flex justify-center items-center">
                Adidas Jackets
              </h5>
            </a>
            <div className="flex justify-center items-center mt-1">
              <div className="text-lg font-second text-gray-900 dark:black">
                ${product.price}
              </div>
            </div>
            <div className="flex justify-center items-center mt-2">
              <Link
                to={`/products/${product.id}`}
                href="#"
                className="text-white bg-[black] hover:bg-white hover:text-[black] w-[100%] text-sm px-5 py-2.5 text-center"
              >
                ADD TO CART +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
