import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';

const textVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const slideInVariants = {
  hidden: { x: '-40%' },
  visible: { x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const Newest = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="py-0 md:py-2 lg:px-[50px]" ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        <div className="px-4 flex mt-14 items-center">
          <h1 className="flex text-4xl md:text-5xl lg:text-[45px] font-bold font-custom leading-[40px]">
            NEWEST
          </h1>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='ml-6 mt-3'
          >
            <svg width="41" height="35" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3698 0L20.0635 5.42257V34.1622L0 14.0987L14.3698 0Z" fill="#DF319A"/>
              <path d="M25.7572 0L20.0635 5.42257V34.1622L40.127 14.0987L25.7572 0Z" fill="#DF319A"/>
            </svg>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-36 mx-2 mt-[50px]">
          {ourWorks?.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="relative mx-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            > 
              <p className='font-custom1 text-base text-[#979797] lg:w-[60vh] 2xl:w-[40vh]'>{image.workDescription}</p>
              <div className="relative w-full h-full mt-4">
                <img
                  src={image.workImage}
                  alt=""
                  className="w-full h-full object-cover bg-black"
                />
                
                {/* link to single page */}
               <Link to={`/our-works/${image.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-800 bg-opacity-80 cursor-pointer p-2"
                  >
                    <motion.p
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className='font-custom2 text-[33px] font-normal'
                    >
                      {image.workName}
                    </motion.p>
                    <motion.p
                      variants={textVariants}
                      initial="hidden"
                      animate="visible"
                      className='font-custom1 text-lg font-normal'
                    >
                      {image.hoverText}
                    </motion.p>
                  </motion.div>
                )}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='justify-center items-center text-center'>
          <Link 
              to="/our-works" 
              onClick={() => window.scrollTo({
              top: 0,
              left: 0,
              })}>
                  <button className="mt-[120px] w-[207px] text-black hover-bg-black transition duration-500 ease-in-out hover:text-white hover:bg-black text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
                    View more
                  </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Newest;
