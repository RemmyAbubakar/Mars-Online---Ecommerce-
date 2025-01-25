import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-4 bg-[#ffffff] sm:p-6 sm:pb-20 md:pb-0 lg:pb-5  font-second">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="md:flex md:justify-between border-black">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">
              Info
            </h2>
            <ul className="text-gray-600 dark:text-gray-900">
              <li className="mb-4 whitespace-nowrap">
                <Link to={"/contacts"}>Contact Us</Link>
              </li>
              <li className="mb-4 whitespace-nowrap">Shipping</li>
              <li className="mb-4 whitespace-nowrap">FAQ</li>
              <li className="mb-4 whitespace-nowrap">Return Policy</li>
              <li className="mb-4 whitespace-nowrap">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mr-[10%]">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-900">
              Socials
            </h2>
            <div className="mt-11 pr-9 ">
              <ul className="text-gray-600 dark:text-gray-400 inline-flex gap-4 pr-11">
                <li className="mb-4">
                  <a href="">
                    <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                      <FaWhatsapp size={20} color="black" />
                    </button>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.instagram.com/mars.retail/">
                    <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                      <AiOutlineInstagram size={20} color="black" />
                    </button>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://twitter.com/mars">
                    <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                      <BsTwitter size={20} color="black" />
                    </button>
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://www.tiktok.com/@mars.retailcdv">
                    <button className="border h-9 w-9 border-black inline-flex justify-center items-center rounded-full">
                      <TbBrandTiktok size={20} color="black" />
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div>
        <div className="flex justify-center items-center ">
          <div>
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img src="./images/lll.png" />
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-center sm:flex sm:items-center sm:justify-center md:flex md:items-center md:justify-center md:pb-10 lg:pb-3">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-900">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Mars™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
