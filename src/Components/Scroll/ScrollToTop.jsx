import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-3 left-0 lg:left-[1px] bg-none rounded lg:bg-black lg:hover:bg-[#DF319A] lg:hover:text-black text-black lg:text-white py-1 px-1 transition-all duration-300 ease-in-out`}
      onClick={scrollToTop} title='Scroll to Top'
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
