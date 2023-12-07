import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center items-center py-1">
      <button
        onClick={scrollToTop}
        className="bg-white text-black hover:bg-gray-800 hover:text-white p-[5px] text-[8px]"
        title='Go to Top'
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
