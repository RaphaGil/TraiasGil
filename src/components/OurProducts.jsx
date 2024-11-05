import React, { useEffect, useRef } from 'react';
import beltImage from "../assets/img/belt.png";
import mobileCaseImage from "../assets/img/mobilecase.png";
import traisImage from "../assets/img/Traias.png";
import { Link } from "react-scroll";
import './OurProducts.css'; // Import the CSS file for animations

const OurProducts = () => {
  const imageRefs = useRef([]);

  const products = [
    {
      id: 1,
      image: beltImage,
      title: "Cintos",
      description: "Cintos com detalhes conforme o cliente quer.",
      href: 'belts'
    },
    {
      id: 2,
      image: mobileCaseImage,
      title: "Acessórios",
      description: "Explore os últimos avanços em tecnologia empresarial.",
      href: 'accessories'
    },
    {
      id: 3,
      image: traisImage,
      title: "Traias de Cavalo",
      description: "Veja as tendências que moldam a tecnologia hoje.",
      href: ''
    },
  ];

  // Set up Intersection Observer to add "slide-in" class to images
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className='p-5' id='produtos'>
      <div className='flex flex-wrap justify-center gap-10'>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="max-w-sm bg-gray-800 dark:border-gray-700 rounded-lg overflow-hidden shadow-md"
          >
            <img 
              ref={el => imageRefs.current[index] = el} // Ref for the image
              className="rounded-t-lg slide-in-image opacity-0" 
              src={product.image} 
              alt={product.title} 
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.title}</h5>
              <p className="mb-3 font-normal text-gray-400">{product.description}</p>
              
              {product.href ? (
               <Link to={product.href}  smooth={true} duration={500}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-amber-300 rounded-sm hover:bg-amber-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-300 dark:hover:bg-amber-300 dark:focus:ring-amber-300">
                  Veja Mais
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </Link>
              ) : (
                <span className="text-sm text-gray-400">Mais informações em breve</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
