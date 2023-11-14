import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../Assets/office2.png";

const ServicesOnAbout = () => {
  const buttonVariants = {
    initial: { y: 0, rotate: 0 },
    hover: { y: (i) => (i % 2 === 0 ? -10 : 10), rotate: Math.random() * -60 },
  };

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
      <div className='grid grid-cols-2 mt-[70px] px-3 lg:gap-x-20 lg:ml-[20px]'>
        <motion.button
          className='font-custom1 lg:ml-36 h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#DF319A]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Web Design
        </motion.button>
        <motion.button
          className='font-custom1 lg:ml-20 mt-[50px] h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#D9D9D9]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Campaign
        </motion.button>
        <motion.button
          className='font-custom1 lg:ml-12 h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#DF319A]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Web Design
        </motion.button>
        <motion.button
          className='font-custom1 mt-[50px] h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#DF319A]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Web Design
        </motion.button>
        <motion.button
          className='font-custom1 lg:ml-36 h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#DF319A]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Web Design
        </motion.button>
        <motion.button
          className='font-custom1 lg:ml-20 mt-[50px] h-[48px] lg:w-[198px] text-[#1E1E1E] text-lg bg-[#D9D9D9]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Graphic Design
        </motion.button>
        {/* <motion.button
          className='font-custom1 h-[48px] lg:w-[198px] ml-72 text-[#1E1E1E] text-lg bg-[#DF319A]'
          variants={buttonVariants}
          whileHover="hover"
        >
          Web Design
        </motion.button> */}
      </div>
    </div>
  );
};

export default ServicesOnAbout;
