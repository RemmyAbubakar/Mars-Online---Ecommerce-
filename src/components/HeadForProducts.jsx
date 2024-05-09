import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

function HeadForProducts() {
  return (
    <div className="flex justify-center items-center lg:mt-11 md:mt-10 sm:mt-5 md:text-center sm:text-center">
      <Link to={"/products"}>
        <Fade top>
          <h3 className="lg:text-2xl md:text-2xl sm:text-lg font-second font-normal cursor-pointer">
            SHOP NOW
          </h3>
        </Fade>
      </Link>
    </div>
  );
}

export default HeadForProducts;
