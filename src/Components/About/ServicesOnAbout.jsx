import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../Assets/office1.png";

const ServicesOnAbout = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row text-white py-0 lg:px-[50px]">
      <div className="flex flex-col p-4 md:py-[124px]">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          Services
        </h1>
        <p className='font-custom1 text-base w-[100%] md:w-[433px] mt-[35px]'>
          We enjoy working together and operating with professionalism.
          <br /> <br />
          By offering a diverse scale of services such as: 
          Communication strategies; Integrated marketing campaigns; 
          Brand building from scratch; Advertising; Media Services; 
          Digital animation; Campaign management; Digital Print (Indoor & Outdoor) & Promotional;
          Supply; PR - Public Relations; Direct Marketing; B2B; CRM 
        </p>
      </div>
      <div className='grid grid-cols-2 mt-[20px] md:mt-[70px] py-8 lg:py-0 px-3 gap-y-5 lg:gap-y-0 lg:gap-x-20 lg:ml-[20px] 2xl:ml-72 relative'>
        <motion.button
          className='relative font-custom font-normal lg:ml-36 h-[48px] lg:w-[198px] text-[#979797] text-lg webBg uppercase'
        >
          <span className="relative text-center hover:opacity-0">
            Web Design
          </span>
        </motion.button>
        <motion.button
          className='relative font-custom font-normal lg:ml-20 lg:mt-[20px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase'
        >
          Campaign
        </motion.button>
        <motion.button
          className='relative font-custom font-normal lg:ml-20 lg:mt-[20px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase'
        >
          Graphic Design
        </motion.button>
        <motion.button
          className='relative font-custom font-normal mt-[0px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase'
        >
          3D Design
        </motion.button>
        <motion.button
          className='font-custom font-normal lg:ml-36 lg:mt-[20px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase'
        >
          Campaign
        </motion.button>
        <motion.button
          className='font-custom font-normal lg:ml-20 lg:mt-[0px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase'
        >
          Campaign
        </motion.button>
        <motion.button
          className='font-custom font-normal lg:ml-20 lg:mt-[20px] h-[48px] lg:w-[198px] text-[#979797] communicationBg text-lg uppercase'
        >
          <span className="relative hover:opacity-0">
            Communication Strategies
          </span>
        </motion.button>
        <motion.button
          className='font-custom font-normal mt-[0px] h-[48px] lg:w-[198px] text-[#979797] text-lg uppercase motionBg'
        >
          <span className="relative hover:opacity-0">
            Motion Design
          </span>
        </motion.button>

        {/* Add more buttons as needed */}
      </div>
    </div>
  );
};

export default ServicesOnAbout;
