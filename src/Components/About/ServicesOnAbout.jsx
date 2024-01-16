import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from "../Assets/office1.png";

const ServicesOnAbout = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const serviceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <div className="bg-black flex flex-col lg:flex-row text-white py-0 lg:px-[50px]">
      <div className="flex flex-col lg:items-center lg:justify-center p-4 lg:py-[124px]">
        <h1 className="text-4xl lg:text-[33px] font-bold font-custom leading-[47px]">
          Services
        </h1>
        {/* <p className='font-custom1 text-base w-[100%] lg:w-[433px] mt-[35px]'>
          We enjoy working together and operating with professionalism.
          <br /> <br />
          By offering a diverse scale of services such as: 
          Communication strategies; Integrated marketing campaigns; 
          Brand building from scratch; Advertising; Media Services; 
          Digital animation; Campaign management; Digital Print (Indoor & Outdoor) & Promotional;
          Supply; PR - Public Relations; Direct Marketing; B2B; CRM 
        </p> */}
      </div>
      <div className='grid lg:grid-cols-2  py-8 lg:py-16 px-3 gap-y-10 lg:gap-y-0 lg:gap-x-20 lg:ml-[80px] 2xl:ml-72 relative'>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={serviceVariants} transition={{ delay: 0.8, ease: "easeOut" }}>
          <p className='font-custom text-[#DF319A]'>Branding strategy</p>
          <p className='font-custom1 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet veritatis nulla repudiandae, quas excepturi!</p>
          <hr className='mt-2' />
        </motion.div>

        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={serviceVariants} transition={{ delay: 1, ease: "easeOut" }} className='lg:mt-20'>
          <p className='font-custom text-[#DF319A]'>Creative</p>
          <p className='font-custom1 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet veritatis nulla repudiandae, quas excepturi!</p>
          <hr className='mt-2' />
        </motion.div>

        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={serviceVariants} transition={{ delay: 1.2, ease: "easeOut" }} className='lg:mb-20'>
          <p className='font-custom text-[#DF319A]'>Animation & 3D Modeling</p> 
          <p className='font-custom1 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet veritatis nulla repudiandae, quas excepturi!</p>
          <hr className='mt-2' />
        </motion.div>
        
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={serviceVariants} transition={{ delay: 1.4, ease: "easeOut" }} className='lg:mt-20'>
          <p className='font-custom text-[#DF319A]'>Design & Web Development</p>
          <p className='font-custom1 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet veritatis nulla repudiandae, quas excepturi!</p>
          <hr className='mt-2' />
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesOnAbout;
