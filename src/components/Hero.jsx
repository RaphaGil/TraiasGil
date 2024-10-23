import React from 'react';

const Hero = () => {
  return (
    <div>
      <section
        className="relative bg-center bg-no-repeat bg-cover h-screen"
        style={{ backgroundImage: "url('/assets/img/Hero.png')" }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative px-4 mx-auto max-w-screen-xl text-center py-72 z-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Produtos Feito a Mão com Amor
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 lg:px-48">
            Variedades de produtos em couro a gosto do cliente e rapida entrega.
          </p>
          <div className="flex flex-col space-y-32 px-36 sm:flex-row sm:justify-center ">
            <a
              href="/home"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-amber-300 hover:bg-amber-100 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-300"
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
