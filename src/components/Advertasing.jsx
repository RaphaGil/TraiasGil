import React, { useEffect, useRef } from "react";

// Reusable SVG Icon Components
const StarIcon = () => (
  <svg
    className="w-3 h-3 text-gray-900 inline-block"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 .587l3.668 7.568 8.332 1.151-6.001 5.673 1.501 8.021L12 18.896l-7.501 3.104 1.501-8.021-6.001-5.673 8.332-1.151z" />
  </svg>
);

const Icon = ({ path }) => (
  <svg
    className="w-7 h-7 text-gray-900"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

// Reusable Card Component with Intersection Observer
const Card = ({ icon, title, description, stars, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-col justify-between md:max-w-sm w-full p-6 bg-amber-300 border border-gray-200 rounded-lg shadow h-64 mx-2 my-2 transition-all duration-500 ease-in-out opacity-0 transform translate-y-10"
      style={{ transitionDelay: `${index *200}ms` }}
    >
      {icon}
      {stars && <div className="flex mb-3">{Array(5).fill(<StarIcon />)}</div>}
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">{title}</h5>
      <p className="mb-3 font-normal text-gray-900">{description}</p>
    </div>
  );
};

// Main Component
const Advertising = () => {
  const cardData = [
    {
      icon: (
        <Icon path="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      ),
      title: "Entrega em Todo o Brasil",
      description: "Receba nossos produtos diretamente em sua casa, onde quer que você esteja."
    },
    {
      icon: null,
      title: "A Gosto Do Cliente",
      description: "Transformamos suas ideias em produtos personalizados com excelência.",
      stars: true
    },
    {
      icon: (
        <Icon path="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
      ),
      title: "Feito a Mão e Couro",
      description: "Produtos feitos à mão em couro, com atenção aos detalhes e qualidade."
    },
    {
      icon: (
        <Icon path="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
      ),
      title: "Aceito encomenda",
      description: "Entre em contato conosco e compartilhe sua ideia!"
    }
  ];

  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-around p-10 md:gap-4 py-28">
      {cardData.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
};

export default Advertising;
