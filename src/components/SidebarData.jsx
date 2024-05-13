import React from "react";
import { BsPlus } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

export const SidebarData = [
  {
    title: <Link to="/">HOME</Link>,
    path: "/",
  },
  {
    title: "SHOP",
    path: "/shop",
    iconClosed: <BsPlus size={17} />,
    iconOpen: <BsX size={17} />,
    subNav: [
      {
        title: <Link to="/products">Shop All</Link>,
        path: "/Shop/shop all",
      },
      {
        title: "T-Shirts",
        path: "/shop/t-shirts",
      },
      {
        title: "Hoodies",
        path: "/shop/hoodie",
      },
      {
        title: "Bottoms",
        path: "/shop/bottoms",
      },
      {
        title: "Hats",
        path: "/shop/hats",
      },
      {
        title: "Accessories",
        path: "/shop/accessories",
      },
    ],
  },
  {
    title: <Link to="/aboutus">ABOUT MARS</Link>,
    path: "/aboutmars",
  },
  {
    title: "PRIMARY COLLECTIONS",
    path: "/primarycollections",
  },
  {
    title: <Link to="/signin">LOG IN</Link>,
    path: "/signin",
  },
];
