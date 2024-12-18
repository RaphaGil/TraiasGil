import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPinterest, faCcMastercard, faCcVisa, faCcAmex, faCcDinersClub, faCcDiscover } from '@fortawesome/free-brands-svg-icons'; 
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importing icons// Import the required icons
import Logo from "../assets/logo.png"; 
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 ">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        {/* Flex container for logo and links */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <img src={Logo} className="h-44 mb-4 md:mb-0" alt="Flowbite Logo" />
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-100  ">
            <li>
              <a href="#" className="hover:underline hover:text-amber-200 me-4 md:me-6">Sobre</a>
            </li>
            <li>
              <Link to='produtos' smooth={true} duration={500} className="hover:underline hover:text-amber-200 me-4 md:me-6">Produtos</Link>
            </li>
          
            <li>
            <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-amber-200">Contato</a>
            </li>
       
          </ul>
          <div className='text-sm m-10'>
         <p className='text-white '>Localização: Piracicaba - SP</p>
          <p className='text-white '>Contato: 019 99365 0398</p>
          <div className='flex justify-center space-x-3 mt-4'>
          <a href="https://www.instagram.com/gustavo_gil321?igsh=MTQybGt5ajM5OXppOA==" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="Instagram">
            <FaInstagram size={25} />
          </a>
          <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="WhatsApp">
            <FaWhatsapp size={25} />
          </a>
          </div>
        </div>
        </div>
        

        {/* <div className='flex justify-center gap-4 mb-5 mt-5'>
          <a href="https://www.instagram.com/gustavo_gil321?igsh=MTQybGt5ajM5OXppOA==" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="Instagram">
            <FaInstagram size={25} />
          </a>
          <a href="https://wa.me/+5519993650398" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-300 dark:hover:text-white" aria-label="WhatsApp">
            <FaWhatsapp size={25} />
          </a>
          </div> */}
        {/* Flex container for icons */}
        <div className='flex justify-evenly items-center  py-4'>
          <div>
          <FontAwesomeIcon icon={faPinterest} className='text-white text-3xl mx-2' />
          <FontAwesomeIcon icon={faCcMastercard} className='text-white text-3xl mx-2' />
          <FontAwesomeIcon icon={faCcVisa} className='text-white text-3xl mx-2' />
          <FontAwesomeIcon icon={faCcAmex} className='text-white text-3xl mx-2' />
          <FontAwesomeIcon icon={faCcDinersClub} className='text-white text-3xl mx-2' />
          <FontAwesomeIcon icon={faCcDiscover} className='text-white text-3xl mx-2' />
          </div>
        
        </div>
        
        <hr className="my-6 border border-amber-200 sm:mx-auto lg:my-8" />
        
        <span className="block text-sm text-gray-200 sm:text-center pb-10">
          © 2024 <a href="https://flowbite.com/" className=" ">Traias Gil</a>. 
          Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
