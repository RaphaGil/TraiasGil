import React from 'react';
import Feitoamao from '../assets/img/10.jpg'; // Correctly import the image

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center mb-10 overflow-hidden">
      
      {/* Image Container with Overlay */}
      <div className="relative w-full md:w-1/2 h-full bg-black">
        <img
          className="h-full w-full object-cover"
          src={Feitoamao} // Use the imported image variable
          alt="Tools"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>
      
      {/* Text Container */}
      <div className="w-full md:w-1/2 p-6 flex flex-col items-center text-center space-y-4 z-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Olá!</h2>
        <p className="text-gray-700 leading-relaxed font-thin">
          Eu sou o Gustavo e tenho 23 anos. Sempre amei cavalos e o mundo dos cavaleiros. Essa paixão me levou a criar peças em couro, como cintos, acessórios e traias para cavalos. Faço tudo com muito cuidado e sempre busco melhorar em cada peça nova.
        </p>
        <p className="text-gray-700 leading-relaxed font-thin">
          Moro em Piracicaba - interior de São Paulo, mas envio minhas criações para qualquer lugar, levando um pouco do meu amor pelo couro e pelos cavalos para quem também curte esse universo.
        </p>
      </div>
      
    </div>
  );
};

export default AboutMe;
