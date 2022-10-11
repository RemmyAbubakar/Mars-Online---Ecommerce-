import React from 'react'
import {categories} from "./CategorieData"
import CategoriesItem from './CategoriesItem'

function Categories() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-2 md:gap-2 md:justify-between md:flex p-3 sm:gap2">
      {categories.map((item) => (
        <CategoriesItem item={item} />
      ))}
    </div>
  );
}

export default Categories