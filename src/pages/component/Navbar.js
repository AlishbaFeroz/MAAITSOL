// pages/index.js

import React, { useState } from "react";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white h-20 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div>
            <span className="text-red-500 font-bold text-2xl">AK</span>
            <span className="text-blue-900 font-bold text-2xl">Digi-Nexus</span>
            <br />
            <span className="text-gray-500 text-sm ">Software Company</span>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 17 14"
            fill="none"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`md:hidden fixed top-0 right-0 w-full bg-white dark:bg-gray-900 transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform ease-in-out duration-300`}
        >
          <ul className="flex flex-col items-center space-y-4 mt-20">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:w-auto md:items-center md:space-x-8 rtl:space-x-reverse">
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-900 hover:text-red-500 dark:text-white dark:hover:text-blue-500"
              >
                Contact
              </a>
            </li>
            <button className="bg-blue-900 p-3 rounded-full hover:bg-blue-950 transition delay-150 text-white">
              Book a call
            </button>
            <button className="bg-blue-900 p-3 rounded-full hover:bg-blue-950 transition delay-150 text-white">
              Contact Us
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
