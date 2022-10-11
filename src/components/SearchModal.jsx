import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { VscClose } from "react-icons/vsc";

function SearchModal() {
  return(
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue border-4 border-cyan-600">
        <div className="bg-white fixed top-[40%] left-[33%] w-[36vw] h-72  border-4 border-blue-900">
          <div className="flex justify-center items-center bg-gray-100">
            <div className="ml-[42%]">
              <h3 className="text-2xl font-abc">SEARCH</h3>
            </div>
            <div className="mt-2 w-[78%] mr-[2%] flex justify-end">
              <button onClick={() => {}}>
                <VscClose size={35} />
              </button>
            </div>
            <hr className="mt-14" />
          </div>
          <div className="flex justify-center mt-8 box-border outline w-[90%] ml-8">
            <input
              type="text"
              placeholder="Search our store..."
              className="w-[90%] h-16 outline-none"
            />
            <button>
              <IoSearchOutline size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal