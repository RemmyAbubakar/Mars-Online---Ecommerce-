import React from 'react';
import ImageSlider from '../components/ImageSlider';
import {SliderData} from '../components/SliderData';
import HeadForProducts from '../components/HeadForProducts';
import ViewAllButton from '../components/ViewAllButton';
import AboutMars from '../components/AboutMars';
import Categories from '../components/Categories';
import Cards from '../components/Cards'



function Home() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <HeadForProducts />
      <Cards />
      <AboutMars />
      <Categories />
      <ViewAllButton />
    </div>
  );
}

export default Home