import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png"; 
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Adjust the scroll threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Toggle the menu open/close state
  };

  return (
    <nav className={`absolute w-full z-30 top-0 pr-4 transition duration-300 ${scrolled ? "bg-brown-800 bg-opacity-80" : "bg-transparent"}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="/home" className="flex items-center">
          <img src={Logo} className="h-36" alt="TraiasGil Logo" />
        </a>

        <div className="flex md:order-2 space-x-4 md:space-x-6 rtl:space-x-reverse">
          {/* Social Media Icons */}
          <a href="https://www.instagram.com/gustavo_gil321?igsh=MTQybGt5ajM5OXppOA==" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
          {/* Menu toggle button (for mobile) */}
          <button
            type="button"
            onClick={toggleMenu} // Add onClick handler to toggle menu
            className="inline-flex items-center pr-2 w-10 justify-center text-sm text-white hover:text-amber-300 md:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen} // Reflect the menu open state
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${menuOpen ? "block" : "hidden"}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 font-normal border border-gray-100 rounded-lg dark:bg-gray-200">
            <li>
              <a href="/sobre" className="block py-2 px-3 text-white bg-amber-300 rounded md:bg-transparent md:text-amber-300 md:p-0 md:dark:text-amber-300" aria-current="page">
                Sobre
              </a>
            </li>
            <li>
              <a href="/produtos" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Produtos
              </a>
            </li>
            <li>
              <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-200">
            <li>
              <a href="/sobre" className="block py-2 px-3 text-white bg-amber-300 rounded md:bg-transparent md:text-amber-300 md:p-0 md:dark:text-amber-300" aria-current="page">
                Sobre
              </a>
            </li>
            <li>
              <a href="/produtos" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Produtos
              </a>
            </li>
            <li>
              <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 text-white rounded hover:bg-white md:hover:bg-transparent md:hover:text-amber-300 md:p-0 md:dark:hover:text-amber-300 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
