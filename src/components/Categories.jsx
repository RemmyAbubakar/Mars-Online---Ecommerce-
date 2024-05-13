import React from "react";
import CollectionsSlider from "./CollectionsSlider";
import ThriftSlider from "./ThriftSlider";
import MarsBrandsSlider from "./MarsBrandsSlider";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-0 sm:gap-x-0">
      <div>
        <Link to={"/collections"}>
          <CollectionsSlider />
        </Link>
      </div>
      <div>
        <Link to={"/thrifts"}>
          <ThriftSlider />
        </Link>
      </div>
      <div>
        <Link to={"/marsbrands"}>
          <MarsBrandsSlider />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
