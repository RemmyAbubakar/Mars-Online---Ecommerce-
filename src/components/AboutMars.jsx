import React from "react";
import Fade from "react-reveal/Fade";

function AboutMars() {
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row px-3 py-3">
        <div className="flex justify-center items-center">
          <Fade left>
            <div className="p-14">
              <h3 className="text-4xl mb-4 font-second font-normal">MARS</h3>
              <p className="font-second">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly
              </p>
            </div>
          </Fade>
        </div>
        <div className="flex justify-center items-center">
          <Fade bottom>
            <div className="hover:bg-gray-100">
              <img src="./images/supreme.webp" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default AboutMars;
