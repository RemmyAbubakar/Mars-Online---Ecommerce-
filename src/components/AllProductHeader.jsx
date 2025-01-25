import React from "react";

function AllProductHeader() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex justify-between items-center w-full">
        {/* Centered "ALL PRODUCTS" */}
        <div className="flex-1 sm:ml-14 md:ml-24 lg:ml-28 text-center text-gray-700 font-rem lg:text-3xl md:text-2xl sm:text-lg sm:mt-14 md:mt-12 lg:mt-10">
          <h3>ALL PRODUCTS</h3>
        </div>

        {/* Right-aligned "116 products" */}
        <div className="text-gray-700 font-rem lg:text-lg md:text-md sm:text-sm sm:mt-14 md:mt-12 lg:mt-10 lg:mr-12 md:mr-10">
          <h3>116 products</h3>
        </div>
      </div>
    </div>
  );
}

export default AllProductHeader;
