import React, { useCallback, useEffect, useState } from 'react';
import slidePhoto1 from "../Assets/dokutechSlider.png";
import slidePhoto2 from "../Assets/mokne.png";
import slidePhoto3 from "../Assets/gjelber.png";
import { motion, AnimatePresence } from 'framer-motion';

const sliderData = [
  {
    image: slidePhoto1,
    text: 'Text for Image 1',
    categories: ['Campaign', 'Logo', 'Brand'],
    descriptionText: "We see the gaps, trends, blind spots and white spaces. Those ‘right under your nose’ and ‘never thought about it like that’ game-changers. We see the stories, angles and opportunities. The ways in. And the ways out. The tiny tweak that makes the big difference and the big idea that’s bigger than you think."
  },
  {
    image: slidePhoto2,
    text: 'Text for Image 2',
    categories: ['Campaign', 'Logo', 'Brand'],
    descriptionText: "We see the gaps, trends, blind spots and white spaces. Those ‘right under your nose’ and ‘never thought about it like that’ game-changers. We see the stories, angles and opportunities. The ways in. And the ways out. The tiny tweak that makes the big difference and the big idea that’s bigger than you think."
  },
  {
    image: slidePhoto3,
    text: 'Text for Image 3',
    categories: ['Campaign', 'Web', '3D Design'],
    descriptionText: "We see the gaps, trends, blind spots and white spaces. Those ‘right under your nose’ and ‘never thought about it like that’ game-changers. We see the stories, angles and opportunities. The ways in. And the ways out. The tiny tweak that makes the big difference and the big idea that’s bigger than you think."
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

  // const handlePrevSlide = () => {
  //   setDirection(-1);
  //   setCurrentSlide((prevSlide) => (prevSlide - 1 + sliderData.length) % sliderData.length);
  // };

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
    <>
      <div className="relative bg-[#E6E6E6] lg:px-[50px] z-40 logos">
        <div className='flex logos-slide mt-5'>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px] '>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
          <h1 className='text-6xl tracking-[5px] ml-7 md:text-5xl lg:text-[70px] font-bold font-custom leading-[40px]'>WORK</h1>
        </div>
        <div className="px-4 flex items-center pt-5">
          <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold font-custom leading-[55px]">
            SPOTLIGHTED
          </h1>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='ml-6 mt-3'
          >
            <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A"/>
            </svg>

          </motion.div>
        </div>

        <div className="lg:mt-4 w-full p-4 flex flex-col lg:flex-row items-center relative">
          <div className="relative w-full h-[486px] 2xl:h-[600px] lg:w-3/4 overflow-hidden">
            <AnimatePresence custom={direction} wait>
              <motion.img
                key={currentSlide}
                src={sliderData[currentSlide].image}
                alt={`Image ${currentSlide + 1}`}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                initial={{ x: direction === 1 ? '100%' : '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: direction === 1 ? '-100%' : '100%' }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='object-cover'
              />
            </AnimatePresence>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={transition}
            className="slider-text p-4 lg:p-6  text-base w-full lg:w-1/2"
          >
            <div className="flex items-center text-[#979797] 2xl:ml-[61px] 2xl:mt-[40px]">
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
              className="text-2xl md:text-[33px] lg:text-4xl font-custom2 mb-2 2xl:ml-[61px]"
            >
              {sliderData[currentSlide].text}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
              className="text-[#1E1E1E] font-custom1 text-base pt-6 2xl:ml-[61px] 2xl:w-[425px]"
            >
              {sliderData[currentSlide].descriptionText}
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
              className="2xl:ml-[61px] 2xl:mt-[280px] mt-12 lg:mt-[170px] w-[207px] text-black hover:text-white hover:bg-black transition duration-500 ease-linear hover-text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
            >
              Show More
            </motion.button>
          </motion.div>
        </div>

        <button
          className="absolute top-1/2 hidden lg:block right-3.5 next-button bg-transparent p-2 ml-4"
          onClick={handleNextSlide}
        >
          <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(0.741998 0.670402 -0.741998 0.670402 1 1.32446)" stroke="black" />
            <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(0.741998 -0.670402 0.741998 0.670402 1 37.4648)" stroke="black" />
          </svg>
        </button>

        {/* <button
          className="absolute top-1/2 hidden lg:block left-3.5 prev-button bg-transparent p-2 ml-4"
          onClick={handlePrevSlide}
        >
          <svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(-0.741998 0.670402 0.741998 0.670402 21 37.4648)" stroke="black" />
            <line y1="-0.5" x2="26.9542" y2="-0.5" transform="matrix(-0.741998 -0.670402 0.741998 -0.670402 21 1.32446)" stroke="black" />
          </svg>
        </button> */}
      </div>
    </>
  );
};

export default HorizontalSlider;
