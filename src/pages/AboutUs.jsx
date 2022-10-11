import React from "react";
import Fade from "react-reveal/Fade";

function AboutUs() {
  return (
    <div className="font-second px-20">
      <div className="flex justify-center items-center text-3xl mt-5 font-bold">
        <h3>ABOUT MARS</h3>
      </div>
      <div className="flex justify-center items-center mt-10 font-semibold text-xl">
        <h3>who are we?</h3>
      </div>
      <div className="mt-6">
        <Fade left>
          <p>
            We are a brand established in Ghana that deals in accessories for
            smartphones, computers and so much more. With a dynamic brand
            strategy and innovative themes that are sure to get heads turning,
            our accessories bring maximum protection and style to all your
            devices.
            <br />
            <br />
            <br />
            With years' worth of experience, we've provided people across the
            world with the most premium and the most authentic products and
            services. We have built trust with our devout followers and
            supporters, who are our “CASETODIANS”. Every purchase is guaranteed
            to bring a level of style to the gadgets of all our customers.
          </p>
        </Fade>
      </div>

      <div className="flex justify-center items-center mt-20 font-semibold text-xl">
        <h3>giving back</h3>
      </div>
      <div className="mt-6">
        <Fade right>
          <p>
            Casestody prides itself in giving back to the community hence the
            inception of the “Casestody Charity Club”. With constant donations
            being made to support a variety of causes, we stand above all
            others. Just as loyal as our customers are to us, we aim to be just
            as loyal to them.
          </p>
        </Fade>
      </div>

      <div className="flex justify-center items-center mt-20 font-semibold text-xl">
        <h3>#creativity</h3>
      </div>
      <div>
        <Fade left>
          <p className="mt-6">
            Casestody aims at transforming the public opinion of creativity in
            all forms into a much more positive light and allowing people to
            appreciate the creative elements in our day and age. Our team
            thrives on pushing creativity as much as possible, and it is evident
            in everything relating to our brand. We create designs that are
            expressive and speak to different personalities and characters.
          </p>
        </Fade>
      </div>

      <div className="flex justify-center items-center mt-20 font-semibold text-xl">
        <h3>just by the way ?</h3>
      </div>
      <div className="mt-6">
        <Fade right>
          <p>
            We easily continue to reach different parts of Africa and the world,
            which is one small step for technology accessories and one giant
            leap for a world of uniqueness, says “The CEO of Casestody”. We are
            far from over! With the level of dedication to our products and the
            incredible reception from our Casetodians, the brand has only just
            begun!
          </p>
        </Fade>
      </div>

      <div className="flex justify-center items-center mt-20 font-semibold text-xl">
        <h3>Mars identity</h3>
      </div>
      <div className="flex justify-center items-center">
        <Fade bottom>
          <img src="./images/marsss.png" />
        </Fade>
      </div>
    </div>
  );
}

export default AboutUs;
