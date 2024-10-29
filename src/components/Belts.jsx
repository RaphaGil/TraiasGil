import React, { useState, useEffect } from "react";
import { Layout } from "./Layout";
import beltData from "../items.json";
import "./OurProducts.css"; // Import your CSS file

const Belts = () => {
  const [belts, setBelts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filteredBelts = beltData.filter((belt) => belt.category === "cinto");
    const beltsWithImages = Promise.all(
      filteredBelts.map(async (belt) => {
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
            image: "/path/to/default-image.png",
          };
        }
      })
    );

    beltsWithImages
      .then((data) => {
        setBelts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao processar cinturões:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="py-32 w-full">
        {/* Slide-up effect applied to title */}
        <div className="text-5xl text-center font-semibold font-serif text-left ml-10 slide-up">
          <h2 className="inline pr-4">Nossos</h2>
          <h2 className="inline">cintos</h2>
        </div>

        {loading ? (
          <div className="text-center text-xl">Carregando...</div>
        ) : (
          <>
            <div
              id="cintos"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:p-10 p-4"
            >
              {belts.map((belt) => (
                <div
                  key={belt.id}
                  className="shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 bg-gray-800"
                >
                  <img
                    className=""
                    src={belt.image}
                    alt={`Cinto ${belt.id}`}
                    loading="lazy"
                  />
                  <div className="pt-2 text-center">
                    <h5 className="mb-2 text-md font-bold text-white">{`Item ${belt.id}`}</h5>
                    <p className="mb-3 text-sm font-normal text-gray-400">
                      {belt.price ? `R$${belt.price.toFixed(2)}` : "Preço indisponível"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
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
          </>
        )}
      </div>
    </Layout>
  );
};

export default Belts;
