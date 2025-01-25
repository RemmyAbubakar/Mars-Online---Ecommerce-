import React from "react";
import ImageSlider from "../components/ImageSlider";
import HeadForProducts from "../components/HeadForProducts";
import ViewAllButton from "../components/ViewAllButton";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import HomeVideo from "../components/HomeVideo";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div className="sm:mt-8 md:mt-0 lg:mt-0"> 
      <Categories />
      <HeadForProducts />
      <Cards />
      <Fade left>
        <HomeVideo />
      </Fade>
      <ViewAllButton />
    </div>
  );
}

export default Home;
