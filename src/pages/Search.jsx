import React from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div>
      <div className="flex justify-center lg:mt-20 md:mt-20 sm:mt-20">
        <h3 className="lg:text-2xl md:text-2xl sm:text-xl font-second font-normal">
          SEARCH OUR STORE
        </h3>
      </div>
      <div className="flex justify-center ml-5 sm:mr-5">
        <div className="flex justify-center lg:mt-7 md:mt-7 sm:mt-4 border border-gray-700 rounded-md outline-none lg:w-[55vw] md:w-[55vw] sm:w-full">
          <input
            type="text"
            placeholder="Search our store..."
            className="lg:w-[55vw] md:w-[55vw] sm:w-full h-11 outline-none font-second text-sm ml-3"
          />
          <button className="mr-5">
            <IoSearchOutline size={23} className="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
