import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div>
      <div className="h-[30vh] mt-7">
        <div className="mt-20">
          <div className="flex justify-center">
            <h3 className="text-2xl font-second font-normal">SEARCH OUR STORE</h3>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-8 border outline w-[60%] mx-auto">
            <input
              type="text"
              placeholder="Search our store..."
              className="w-[55vw] h-12 outline-none font-second"
            />
            <button className="">
              <IoSearchOutline size={25} className="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search