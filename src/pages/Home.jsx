import React from "react";
import ImageSlider from "../components/ImageSlider";
import HeadForProducts from "../components/HeadForProducts";
import ViewAllButton from "../components/ViewAllButton";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import HomeVideo from "../components/HomeVideo";

function Home() {
  return (
    <div>
      <ImageSlider />
      <HeadForProducts />
      <Cards />
      <HomeVideo />
      <Categories />
      <ViewAllButton />
    </div>
  );
}

export default Home;
