import React, { useState } from 'react';
import pinkLogo from "../Assets/pinkLogo.png";
import work1 from "../Assets/2 (1) 1.png";
import work2 from "../Assets/groupICEtea.png";
import work3 from "../Assets/wwww1 1.png";
import work4 from "../Assets/gjelberImageWork.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const images = [
  {
    url: work1,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Water from Istog',
    hoverText: { title: 'MOKNE', description: 'Bottle / Logo / Design' },
  },
  {
    url: work2,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Water from Istog',
    hoverText: { title: 'Hover 2', description: 'Additional Description 2' },
  },
  {
    url: work3,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Water from Istog',
    hoverText: { title: 'Hover 3', description: 'Additional Description 3' },
  },
  {
    url: work4,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Water from Istog',
    hoverText: { title: 'Hover 5', description: 'Additional Description 4' },
  },
];

const textVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const Newest = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="py-0 md:py-2 lg:px-[50px]">
      <div className="px-4 flex mt-14 items-center">
        <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold font-custom leading-[40px]">
          NEWEST
        </h1>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-1 ml-4 object-cover" alt="" />
        </motion.div>
      </div>
      <div className="grid lg:grid-cols-2 gap-y-36 mx-2 mt-[50px]">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mx-2"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <p className='font-custom1 text-base text-[#979797] lg:w-[60vh] 2xl:w-[40vh]'>{image.categories}</p>
            <div className="relative w-full h-full mt-4">
              <img
                src={image.url}
                alt=""
                className="w-full h-full object-cover bg-black"
              />
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
                    {image.hoverText.title}
                  </motion.p>
                  <motion.p
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className='font-custom1 text-lg font-normal'
                  >
                    {image.hoverText.description}
                  </motion.p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* link to go to OUR WORK */}
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
    </div>
  );
};

export default Newest;
