import React, { useState } from 'react';
import logotrekuartista from "../Assets/logo-treku.png";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const hamburgerIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#DF319A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );

const closeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="px-5 md:px-[50px] py-[20px] flex items-center justify-between text-[22px]">
      <div className="hidden sm:block font-custom">Hello</div>

      <div className="text-white flex lg:items-center lg:justify-center flex-grow">
        <Link to="/">
          <img src={logotrekuartista} alt="Logo" className="w-[56px] h-[37px]" />
        </Link>
      </div>

  
      <div
        className="hidden lg:block font-custom text-xl text-[#DF319A] hover:text-black cursor-pointer md:block sm:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? closeIcon : 'MENU.'}
      </div>

   
      <div
        className="font-custom text-xl hover:text-black cursor-pointer sm:block md:hidden"
        onClick={toggleMenu}
      >
          {isMenuOpen ? closeIcon : hamburgerIcon}
      </div>
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }} 
            transition={{ duration: 0.5 }}
            className="top-16 left-0 right-0 bottom-0 fixed flex justify-center items-center bg-white z-10">
                <ul className="font-custom text-7xl leading-[70px] cursor-pointer">
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'><Link to="/">HOME</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'>ABOUT US</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'>WORK</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'>CLIENTS</motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'><Link to="/our-team">TEAM</Link></motion.li>
                <motion.li whileHover={{ scale: 1.1 }} onClick={closeMenu} className='hover:text-[#DF319A] transform hover:scale-110 transition-transform duration-300'>CONTACT</motion.li>
                </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
