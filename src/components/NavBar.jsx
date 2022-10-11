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

function NavBar() {
  const [Sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!Sidebar);

  return (
    <div className="py-0 sticky top-0 z-50 bg-white">
      <nav>
        <div className="bg-[black] text-white h-8 text-[12px] flex justify-center items-center font-second mb-4">
          <h3>30% OFF ALL ORDERS !!</h3>
        </div>
        <div className="flex justify-between items-center">
          <div className="mb-3 ml-6">
            <button>
              <BsList size={30} onClick={showSidebar} />
            </button>
          </div>

          <div className="flex justify-end mb-5">
            <Link to="/">
              <img src="./images/marssss.png" alt="" className="ml-6" />
            </Link>
          </div>
          <div className="flex justify-end mb-3 mr-6">
            <ul className="flex gap-3">
              <li>
                <Link to="/search">
                  <IoSearchOutline size={27} />
                </Link>
              </li>

              <li>
                <Link to="/cart">
                  <IoBagOutline size={27} color="black" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={
          Sidebar
            ? "w-80 h-[100vh] bg-white flex justify-center fixed top-0 transition duration-300 ease-in scroll-auto z-10"
            : "translate-x-[-100%] transition ease-out duration-300 "
        }
      >
        <div className={Sidebar ? "w-[100%] cursor-pointer" : "hidden"}>
          <div className="NavIcon mt-4 ml-5 cursor-pointer">
            <BsX size={45} onClick={showSidebar} />
          </div>

          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
          <div>
            <div className="flex justify-center mt-11 border outline-none w-[89%] mx-auto">
              <input
                type="text"
                placeholder="Search our store..."
                className="w-[55vw] h-11 outline-none font-second text-sm ml-3"
              />
              <button className="mr-1">
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
