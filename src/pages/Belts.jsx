import React, { useState, useEffect } from "react";
import { Layout } from '../components/Layout';
import beltData from "../items.json"; 

const Belts = () => {
  const [belts, setBelts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const filteredBelts = beltData.filter((belt) => belt.category === "cinto");
    const beltsWithImages = Promise.all(filteredBelts.map(async (belt) => {
      try {
        const image = await import(`../assets/img/belts/${belt.image}`);
        return {
          ...belt,
          image: image.default,
        };
      } catch (error) {
        console.error(`Erro ao carregar a imagem para o cinto ${belt.id}:`, error);
        return {
          ...belt,
          image: '/path/to/default-image.png',
        };
      }
    }));

    beltsWithImages.then((data) => {
      setBelts(data);
      setLoading(false); // Update loading state
    }).catch(error => {
      console.error("Erro ao processar cinturões:", error);
      setLoading(false); // Update loading state even on error
    });
  }, []);

  return (
    <Layout>
      <div className="py-32">
        <div className="text-center text-3xl mb-5">
          <h2>Nossos Cintos</h2>
        </div>
        {loading ? ( // Conditional rendering for loading state
          <div className="text-center text-xl">Carregando...</div>
        ) : (
          <div
            id="cintos"
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 md:p-10 p-4 md:px-10"
          >
            {belts.map((belt) => (
              <div key={belt.id} className="shadow-sm rounded-sm transform transition-transform duration-300 hover:scale-105 bg-gray-800">
                <img
                  className=""
                  src={belt.image}
                  alt={`Cinto ${belt.id}`}
                  loading="lazy"
                />
                <div className="pt-2">
                  <h5 className="mb-2 text-xl font-bold text-white">{`Item ${belt.id}`}</h5>
                  <p className="mb-3 font-normal text-gray-400">{belt.price ? `R$${belt.price.toFixed(2)}` : "Preço indisponível"}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Belts;
