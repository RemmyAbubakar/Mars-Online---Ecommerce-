import React from 'react'

function Cards() {
  return (
    <div className="flex justify-between flex-wrap font-second px-14 ">
      <div className=" max-w-sm bg-white mt-11 mb-11 hover:scale-110 ease-in duration-3000">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://i.pinimg.com/736x/5a/17/04/5a17042a0181c1cacc47858192b7b32d.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight dark:text-[black] flex justify-center items-center">
              Adidas Jackets
            </h5>
          </a>
          <div className="flex justify-center items-center mt-1">
            <div className="text-lg font-second text-gray-900 dark:black">
              200$
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <a
              href="#"
              className="text-white bg-[black] hover:bg-white hover:text-[black] w-[100%] text-sm px-5 py-2.5 text-center"
            >
              ADD TO CART +
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white mt-11 mb-11 hover:scale-110 ease-in duration-3000">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://i.pinimg.com/564x/b0/c7/de/b0c7de080f77ed2796d67b044cc466ce.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-lg font-semibold tracking-tight dark:text-[black] flex justify-center items-center">
              Nike Jackets
            </h5>
          </a>
          <div className="flex justify-center items-center mt-1">
            <div className="text-lg font-second text-gray-900 dark:black">
              200$
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <a
              href="#"
              className="text-white bg-[black] hover:bg-white hover:text-[black] w-[100%] text-sm px-5 py-2.5 text-center"
            >
              ADD TO CART +
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-white mt-11 mb-11 hover:scale-110 ease-in duration-3000">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://i.pinimg.com/564x/69/31/2a/69312a65129872c080691463d040ca6c.jpg"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight dark:text-[black] flex justify-center items-center">
              Zara Shirts
            </h5>
          </a>
          <div className="flex justify-center items-center mt-1">
            <div className="text-lg font-second text-gray-900 dark:black">
              200$
            </div>
          </div>
          <div className="flex justify-center items-center mt-2">
            <a
              href="#"
              className="text-white bg-[black] hover:bg-white hover:text-[black] w-[100%] text-sm px-5 py-2.5 text-center"
            >
              ADD TO CART +
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards
