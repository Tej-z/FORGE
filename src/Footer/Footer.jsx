import React from "react";
// import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="">
      <div className="md:w-full mx-auto p-4 ">
        <div className="sm:flex items-center  sm:items-center sm:justify-evenly ">
          <a
            href="https://flowbite.com/"
            className="flex flex-wrap justify-center items-center mb-4 sm:mb-0"
          >
            <img
              src="img2-removebg-preview.png"
              className="h-[150px] mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white ff-tc uppercase">
              Gamers's Garage
            </span>
          </a>
          <ul className="flex flex-wrap justify-center  items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#About"
                className="mr-4 hover:underline hover:text-white md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Events"
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                Events
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 md:w-1/3 sm:mb-0 dark:text-gray-400 md:justify-evenly w-full">
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6 flex "
              >
                {/* <div className="outline"> */}
                {/* <FaInstagram className="outline" /> */}
                Instagram
                {/* </div> */}
              </a>
            </li>
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                {/* <FaLinkedinIn /> */}
                Linkedin
              </a>
            </li>
            <li>
              <a
                href=""
                className="mr-4 hover:underline hover:text-white md:mr-6"
              >
                forgeaseb@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center  dark:text-gray-400 outline ">
          © 2023{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline hover:text-white"
          >
            Forge™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
