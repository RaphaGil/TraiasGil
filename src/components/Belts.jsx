import React, { useState, useEffect } from "react";
import beltData from "../items.json"; // Importing JSON data directly

const Belts = () => {
  const [belts, setBelts] = useState([]);

  useEffect(() => {
    // Filter belts data to include only items with category 'cinto'
    const filteredBelts = beltData.filter((belt) => belt.category === "cinto");
    setBelts(filteredBelts);
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div className="py-32">
      <div className="text-center text-3xl mb-5">
        <h2>Nossos Cintos</h2>
      </div>
      <div
        id="cintos"
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10 "
      >
        {belts.map((belt) => (
          <div key={belt.id} className="border border-gray-300 shadow-md rounded-lg">
            <img
              className=" rounded-t-lg mb-4"
              src={belt.image}
              alt={`Cinto ${belt.id}`}
            />

<div className="flex justify-between items-center p-4">
  <a href="/home">
    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      {`Item ${belt.id}`}
    </h5>
  </a>
  <span className="text-sm font-light text-gray-900 dark:text-white">
    R${belt.price.toFixed(2)}
  </span>
</div>

              
            <div className="flex flex-col space-y-32 px-12 sm:flex-row sm:justify-center mt-4">
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
