import React, { useState, useEffect } from "react";
import beltData from "../items.json"; 

const Belts = () => {
  const [belts, setBelts] = useState([]);

  useEffect(() => {
    const filteredBelts = beltData.filter((belt) => belt.category === "cinto");
    const beltsWithImages = Promise.all(filteredBelts.map(async (belt) => {
      try {
        const image = await import(`../assets/img/belts/${belt.image}`);
        return {
          ...belt,
          image: image.default, // Use .default to get the path
        };
      } catch (error) {
        console.error(`Erro ao carregar a imagem para o cinto ${belt.id}:`, error);
        return {
          ...belt,
          image: '/path/to/default-image.png', // Optional default image in case of error
        };
      }
    }));

    beltsWithImages.then(setBelts).catch(error => {
      console.error("Erro ao processar cinturões:", error);
    });
  }, []); // Runs only once on component mount

  return (
    <div className="py-32">
      <div className="text-center text-3xl mb-5">
        <h2>Nossos Cintos</h2>
      </div>
      <div
        id="cintos"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:p-10 p-4 "
      >
        {belts.map((belt) => (
          <div key={belt.id} className=" shadow-sm rounded-lg transform transition-transform duration-300 hover:scale-105 bg-gray-800">
            <img
              className="rounded-t-lg"
              src={belt.image}
              alt={`Cinto ${belt.id}`}
            />
            <div className="pt-2">
                <h5 className="mb-2 text-xl font-bold  text-white">{`Item ${belt.id}`}</h5>
                <p className="mb-3 font-normal text-gray-400">  {belt.price ? `R$${belt.price.toFixed(2)}` : "Preço indisponível"}</p>
            </div>
            
            <div className="">
              <a
                href="/home"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg bg-amber-300
                hover:bg-amber-200 focus:ring-4 focus:ring-amber-200 dark:focus:ring-amber-200 mb-6"
              >
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Belts;
