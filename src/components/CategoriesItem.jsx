import React from "react";

function CategoriesItem({ item }) {
  return (
    <div className="lg:my-3 md:my-3 lg:mx-1 md:mx-1 sm:mx-1 relative flex-1 cursor-pointer">
      <img src={item.img} className="w-full h-full object-cover " />
      <div className="absolute top-[80%] left-0 ml-5 flex flex-col">
        <div className="font-second font-bold text-white mb-5 text-2xl">
          {item.title}
        </div>
      </div>
    </div>
  );
}

export default CategoriesItem;
