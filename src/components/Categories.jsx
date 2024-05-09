import React from "react";
import { categories } from "./CategorieData";
import CategoriesItem from "./CategoriesItem";
import Fade from "react-reveal/Fade";

function Categories() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-2 md:gap-2 sm:gap-4 md:justify-between md:flex p-3">
      {categories.map((item, index) => (
        <div key={index} className="w-full md:w-1/3">
          <Fade
            bottom={index % 3 === 0}
            right={index % 3 === 1}
            left={index % 3 === 2}
          >
            <CategoriesItem item={item} />
          </Fade>
        </div>
      ))}
    </div>
  );
}

export default Categories;
