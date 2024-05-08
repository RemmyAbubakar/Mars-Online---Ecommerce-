import React from 'react'
import {Link} from "react-router-dom"

function HeadForProducts() {
  return (
    <div className="flex justify-center items-center mt-11 md:text-center sm:text-center">
    <Link to={'/products'}>
      <h3 className="text-2xl font-second font-normal cursor-pointer">
       SHOP NOW
      </h3>
     </Link>
    </div>
  );
}

export default HeadForProducts
