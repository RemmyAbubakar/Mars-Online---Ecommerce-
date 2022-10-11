import React from 'react'

function CategoriesItem({item}) {
  return (
    <div className="m-1 relative flex-1 cursor-pointer">
      <img src={item.img} className="w-[100%] h-[100%] hover:" />
      <div className="absolute top-[80%] left-0 ml-5 flex flex-col">
        <div className="font-second font-bold text-white mb-5 text-2xl">
          {item.title}
        </div>
      </div>
    </div>
  );
}

export default CategoriesItem