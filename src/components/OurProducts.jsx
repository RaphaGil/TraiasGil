import React from 'react';
import beltImage from "../assets/img/belt.png"; // Importing images
import mobileCaseImage from "../assets/img/mobilecase.png"; // Importing images
import traisImage from "../assets/img/Traias.png"; // Importing images

const OurProducts = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: beltImage, // Use the imported image
      title: "Cintos",
      description: "Cintos com detalhes conforme o cliente quer.",
      href: './Belts' // Updated to use a valid path
    },
    {
      id: 2,
      image: mobileCaseImage, // Use the imported image
      title: "Acessórios",
      description: "Explore os últimos avanços em tecnologia empresarial.",
      href: './accessories' // Updated to use a valid path
    },
    {
      id: 3,
      image: traisImage, // Use the imported image
      title: "Traias de Cavalo",
      description: "Veja as tendências que moldam a tecnologia hoje.",
      href: './accessories' // Empty href if no link available
    },
  ];

  return (
    <div className='p-5'>
      <h2 className='text-center text-3xl mb-5'>Nossa variedade de produtos</h2>
      
      <div className='flex flex-wrap justify-center gap-10'>
        {products.map(product => (
          <div key={product.id} className="max-w-sm bg-gray-800 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
            <img 
              className="rounded-t-lg" 
              src={product.image} 
              alt={product.title} 
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{product.title}</h5>
              <p className="mb-3 font-normal text-gray-400">{product.description}</p>
              
              {product.href ? (
                <a href={product.href} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-amber-300 rounded-sm hover:bg-amber-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-amber-300 dark:hover:bg-amber-300 dark:focus:ring-amber-300">
                  Veja Mais
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              ) : (
                <span className="text-sm text-gray-400">Mais informações em breve</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts;
