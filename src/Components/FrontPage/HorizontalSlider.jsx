import React, { useCallback, useEffect, useState } from 'react';
import pinkLogo from "../Assets/pinkLogo.png";
import slidePhoto1 from "../Assets/dokutechSlider.png";
import slidePhoto2 from "../Assets/mokne.png";
import slidePhoto3 from "../Assets/gjelber.png";
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
  {
    image: slidePhoto1,
    text: 'Text for Image 1',
    categories: ['Campaign', 'Logo', 'Brand'],
  },
  {
    image: slidePhoto2,
    text: 'Text for Image 2',
    categories: ['Campaign', 'Logo', 'Brand'],
  },
  {
    image: slidePhoto3,
    text: 'Text for Image 3',
    categories: ['Campaign', 'Web', '3D Design'],
  }
];

const transition = { duration: 1, ease: 'easeInOut' };

const HorizontalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNextSlide = () => {
    setDirection(1);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
  };

  const autoChangeSlide = useCallback(() => {
    handleNextSlide();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(autoChangeSlide, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [autoChangeSlide]);

  return (
    <div className="relative py-0 md:py-4 bg-[#E6E6E6] lg:px-[50px]">
      <div className="px-4 flex mt-14 items-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-custom leading-[47px]">
          SPOTLIGHTED
        </h1>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-3 ml-4 object-cover" alt="" />
        </motion.div>
      </div>

      <div className="lg:mt-4 w-full p-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-3/4" style={{ position: 'relative', height: '486px' }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentSlide}
              src={sliderData[currentSlide].image}
              alt={`Image ${currentSlide + 1}`}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              className='object-cover'
            />
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Initial opacity and x position
          animate={{ opacity: 1, x: 0 }} // Animation to full opacity and original x position
          transition={transition}
          className="slider-text p-6 text-base w-full lg:w-1/2"
        >
          <div className="flex items-center text-[#979797]">
            {sliderData[currentSlide].categories.map((category, index) => (
              <React.Fragment key={index}>
                <div className={index < sliderData[currentSlide].categories.length - 1 ? "mr-2" : ""}>
                  {category}
                </div>
                {index < sliderData[currentSlide].categories.length - 1 && <div className="mr-2">/</div>}
              </React.Fragment>
            ))}
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="text-2xl md:text-[33px] lg:text-4xl font-custom2 mb-2"
          >
            {sliderData[currentSlide].text}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="text-[#1E1E1E] font-custom1 pt-6"
          >
            We see the gaps, trends, blind spots, and white spaces. Those 'right under your nose' and 'never thought about it like that' game-changers.
            We see the stories, angles, and opportunities. The ways in. And the ways out. The tiny tweak that makes the big difference and the big idea that's bigger than you think.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            className="mt-12 lg:mt-[170px] w-[207px] text-black hover:bg-black transition duration-500 ease-linear hover-text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
          >
            Show More
          </motion.button>
        </motion.div>
      </div>

      <button
        className="absolute top-1/2 right-3.5 next-button bg-transparent p-2 ml-4"
        onClick={handleNextSlide}
      >
        <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(0.741998 0.670402 -0.741998 0.670402 1 1.32446)" stroke="black" />
          <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(0.741998 -0.670402 0.741998 0.670402 1 37.4648)" stroke="black" />
        </svg>
      </button>
    </div>
  );
};

export default HorizontalSlider;
