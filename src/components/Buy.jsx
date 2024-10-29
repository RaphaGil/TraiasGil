import React from "react";
import tools from "../assets/img/Tools.png";

const Buy = () => {
  return (
    <div className="relative mb-10 h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${tools})` }}
      />

      {/* Content Overlay */}
      <div className="relative  flex justify-center items-center">
        <a
          href="https://wa.me/+5519993650398"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 rounded-md bg-amber-300 hover:bg-amber-100 transition-colors duration-200"
        >
          Comprar
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Buy;
