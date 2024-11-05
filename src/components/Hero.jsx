import React from 'react';
import heroImage from "../assets/img/Hero.png";
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-center md:bg-fixed bg-cover h-screen hero-background"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Container with slide-up animation */}
        <div className="relative px-4 mx-auto max-w-screen-xl text-center py-72 z-20 slide-up">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Produtos Feito a Mão com Amor
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            Variedades de produtos em couro a gosto do cliente e rápida entrega.
          </p>
          <div className="flex flex-col space-y-32 px-24 md:px-36 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/+5519993650398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-sm bg-amber-300 hover:bg-amber-100"
            >
              Comprar
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
      </section>
    </div>
  );
};

export default Hero;

