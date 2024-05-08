import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";
import HeadForProducts from "../components/HeadForProducts";
import ViewAllButton from "../components/ViewAllButton";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import HomeVideo from "../components/HomeVideo";

function Home() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <HeadForProducts />
      <Cards />
      <HomeVideo />
      <Categories />
      <ViewAllButton />
    </div>
  );
}

export default Home;
