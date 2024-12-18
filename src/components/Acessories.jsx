import React, { useState, useEffect, useRef } from "react";
import acessoriesData from "../items.json";

const Acessories = () => {
  const [acessorie, setAcessorie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const filteredAcessories = acessoriesData.filter((item) => item.category === "acessorios");
    const acessoriesWithImages = Promise.all(
      filteredAcessories.map(async (acessorios) => {
        try {
          const image = await import(`../assets/img/acessories/${acessorios.image}`);
          return {
            ...acessorios,
            image: image.default,
          };
        } catch (error) {
          console.error(`Erro ao carregar a imagem para o acessorio ${acessorios.id}:`, error);
          return {
            ...acessorios,
            image: '/path/to/default-image.png',
          };
        }
      })
    );

    acessoriesWithImages
      .then((data) => {
        setAcessorie(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao processar acessórios:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsHeadingVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, []);

  return (
    <div className="py-32">
      {/* Title with slide-up animation */}
      <div className="text-5xl text-center mb-5 font-semibold font-serif ">
        <h2
          ref={headingRef}
          className={`mb-8 font-sans text-2xl font-bold tracking-extra-wide text-gray-900 inline-block transition-transform duration-1000 ease-out ${
            isHeadingVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          NOSSOS ACESSORIOS
        </h2>
       
      </div>

      {loading ? (
        <div className="text-center text-xl">Carregando...</div>
      ) : (
        <div id="acessorios" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 shadow-sm rounded-sm ">
          {acessorie.map((item) => (
            <div key={item.id} className=" shadow-md rounded-md transform transition-transform duration-300 hover:scale-105 bg-gray-800 hover:bg-amber-300 hover:text-gray-900 text-white">
              <img
                className=""
                src={item.image}
                alt={`Acessório  ${item.id}`}
              />
              <div className="pt-2 text-center">
         
                  <h5 className="mb-2 text-md font-bold ">
                    {`Item ${item.id}`}
                  </h5>
            
                <div className="mb-3 text-sm font-normal ">
                  R${item.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Acessories;
