import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { AiOutlineUser } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { SidebarData } from "./SidebarData";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import SubMenu from "./SubMenu";
import Fade from "react-reveal/Fade";
import { Spin as Hamburger } from "hamburger-react";

function NavBar() {
  const [Sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);
  const handleLinkClick = () => setSidebar(false); // Function to close sidebar when link is clicked

  return (
    <div className="lg:sticky lg:top-0 md:sticky md:top-0 sm:fixed sm:bottom-0 sm:left-0 sm:right-0 z-50 bg-white">
      <nav>
        <div className="flex justify-between items-center py-2 px-4">
          <div className="">
            <button>
              <Hamburger
                direction="right"
                toggled={Sidebar}
                toggle={showSidebar}
                size={24}
              />
            </button>
          </div>

          <div className="">
            <Fade bottom>
              <Link to="/">
                <img
                  src="./images/Mars-retail logo 1.png"
                  alt=""
                  className="ml-6 h- w-32 py-1"
                />
              </Link>
            </Fade>
          </div>
          <div className="">
            <ul className="flex gap-3">
              <li>
                <Link to="/search" onClick={handleLinkClick}>
                  <IoSearchOutline size={27} />
                </Link>
              </li>

              <li>
                <Link to="/cart" onClick={handleLinkClick}>
                  <IoBagOutline size={27} color="black" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[black] text-white h-10 text-[12px] flex justify-between items-center font-second pl-7 tracking-wider cursor-pointer lg:flex md:flex sm:hidden">
          <div className="flex ml-11 text-[14px]">
            <Link to="/collections">
              <div className="mr-4 lg:block md:block sm:hidden">
                <h3>COLLECTIONS</h3>
              </div>
            </Link>
            <Link to={"/thrifts"}>
              <div className="mr-4 text-[14px] lg:block md:block sm:hidden">
                <h3>THRIFT</h3>
              </div>
            </Link>
          </div>
          <div>
            <div className="mr-14 text-[13.5px] lg:block md:block sm:hidden">
              <Link to={"/marsbrands"}>
                <h3>BRANDS CURATED BY MARS</h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-black text-white h-8 text-[12px] flex justify-center items-center font-second sm:fixed sm:top-0 sm:w-full lg:hidden md:hidden">
          <Fade left>
            <h3>27 MINS AWAY TILL NEW THRIFT DROP !</h3>
          </Fade>
        </div>
      </nav>

      <div
        className={
          Sidebar
            ? "w-full h-screen bg-white flex justify-center fixed lg:top-0 md:top-0 sm:bottom-0 lg:mt-16 md:mt-16 sm:mb-14 transition-transform duration-300 ease-in-out z-10 overflow-y-hidden"
            : "transition-transform duration-300 ease-out transform -translate-x-full fixed"
        }
      >
        <div
          className={
            Sidebar
              ? "w-[100%] cursor-pointer lg:mt-0 md:mt-0 sm:mt-20"
              : "hidden"
          }
        >
          {SidebarData.map((item, index) => {
            return (
              <SubMenu
                item={item}
                key={index}
                handleLinkClick={handleLinkClick}
              />
            );
          })}

          <div className="flex ml-5 sm:mr-5">
            <div className="flex justify-center mt-10 border rounded-md outline-none lg:w-[55vw] md:w-[55vw] sm:w-full">
              <input
                type="text"
                placeholder="Search our store..."
                className="lg:w-[55vw] md:w-[65vw] sm:w-[75vw] h-11 outline-none font-second text-sm ml-3"
              />
              <button className="mr-5">
                <IoSearchOutline size={23} className="" />
              </button>
            </div>
          </div>
          <div className="mt-8 space-x-3 ml-5">
            <a href="https://www.instagram.com/mars.retail/">
              <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                <FaWhatsapp size={20} />
              </button>
            </a>

            <a href="https://www.instagram.com/mars.retail/">
              <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                <AiOutlineInstagram size={20} />
              </button>
            </a>

            <a href="https://twitter.com/mars">
              <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                <BsTwitter size={20} />
              </button>
            </a>

            <a href="https://www.tiktok.com/@mars.retailcdv">
              <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                <TbBrandTiktok size={20} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
