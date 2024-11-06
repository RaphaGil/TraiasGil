import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  <head>
    <link rel="preload" href="/path/to/your/logo.png" as="image" />
  </head>;

  return (
    <nav className="absolute w-full z-30 top-0 transition duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link
          to="/your-path"
          smooth={true}
          duration={500}
          className="flex items-center"
        >
          <img src={Logo} className="h-36" alt="TraiasGil Logo" />
        </Link>

        <div className="hidden md:flex">
          {/* NavLinks */}
          <ul className="flex flex-col p-4 md:p-0 font-normal border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row mt-0 md:border-0">
            <li>
              <Link
                to="sobre"
                smooth={true}
                duration={500}
                className="block px-3 text-white bg-amber-300 rounded md:bg-transparent md:text-amber-300 md:p-0"
                aria-current="page"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="produtos"
                smooth={true}
                duration={500}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:bg-transparent hover:text-amber-300 md:p-0"
              >
                Produtos
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/+5519993650398"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 text-white rounded hover:bg-white hover:bg-transparent hover:text-amber-300 md:p-0"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-3 pr-4">
          {/* Icons */}
          <a
            href="https://www.instagram.com/traias_gil?igsh=OGdzdzNuZWQxamJo"
            className="text-white hover:text-amber-300"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://wa.me/+5519993650398"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center pr-2 w-10 justify-center text-sm text-white hover:text-amber-300 md:hidden focus:outline-none"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open main menu"}
          </span>
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-4 font-normal">
          <button
            type="button"
            onClick={toggleMenu}
            className="self-end text-gray-900 hover:text-amber-300 mb-4"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col mt-10">
            <li>
              <Link
                to="sobre"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 hover:bg-amber-300 hover:text-white rounded text-left"
                aria-current="page"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="produtos"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="block py-2 px-3 text-gray-900 hover:bg-amber-300 hover:text-white rounded mt-2 text-left"
              >
                Produtos
              </Link>
            </li>
            <li>
              <a
                href="https://wa.me/+5519993650398"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 px-3 text-gray-900 hover:bg-amber-300 hover:text-white rounded text-left"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
