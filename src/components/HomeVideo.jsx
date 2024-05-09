import React from "react";
import Fade from "react-reveal/Fade";

function HomeVideo() {
  return (
    <div className="w-full rounded-3xl h- relative flex justify-center items-center lg:p-10 md:p-7 sm:p-4 cursor-pointer ">
      <Fade left>
        <img
          alt=""
          src="/images/MARS PR.gif"
          className="w-full h-[30rem] rounded-xl object-cover"
        />
      </Fade>
    </div>
  );
}

export default HomeVideo;
