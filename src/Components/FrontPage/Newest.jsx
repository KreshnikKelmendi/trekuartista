import React from 'react';
import pinkLogo from "../Assets/pinkLogo.png"
import { motion } from 'framer-motion';
import work1 from "../Assets/2 (1) 1.png";
import work2 from "../Assets/groupICEtea.png"
import work3 from "../Assets/wwww1 1.png"
import work4 from "../Assets/gjelberImageWork.png"

const images = [
  {
  url: work1,
  categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog',
  hoverText: 'Hover 1'
  },
  {
    url: work2,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog',
    hoverText: 'Hover 2'
  },
  {
    url :work3,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog',
    hoverText: 'Hover 3'
  },{
    url :work4,
    categories: 'Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog',
    hoverText: 'Hover 4'
  }
  
];

const Newest = () => {
  return (
    <div className="py-0 md:py-4 lg:px-[50px]">
      <div className="px-4 flex mt-14 items-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-custom leading-[47px]">
          NEWEST
        </h1>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-3 ml-4" alt="" />
        </motion.div>
        
      </div>
      <div className="grid lg:grid-cols-2 gap-y-16 mx-2 mt-[50px]">
        {images.map((image, index) => (
         <div key={index} className="relative mx-2">
          <p className='font-custom1 text-base text-[#979797] lg:w-[60vh]'>{image.categories}</p>
           <img
            src={image.url}
            alt=""
            className="w-full h-[405px] mt-4 object-cover bg-black"
          />
          </div>
          ))}
          
      </div>
      <div className='justify-center items-center text-center'>
            <button className="mt-[60px] w-[207px] text-black hover:bg-black transition duration-500 ease-in-out hover:text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
              View more
            </button>
          </div>
      </div>
  );
};

export default Newest;
