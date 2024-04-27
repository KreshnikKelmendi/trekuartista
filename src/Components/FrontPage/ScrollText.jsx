import React from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import ScrollTechnolgy from './ScrollTechnolgy';

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [1, 0], [-255, 750]);

  return (
    <>
    <div className='bg-black lg:py-[62px] lg:px-[30px] overflow-hidden textTransition justify-center items-center mx-auto text-center'>
        <motion.h1 className='hidden lg:flex text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px]' style={{ x }}>We craft digital experiences</motion.h1>
        <h1 className='mt-12 flex lg:hidden text-white text-fit font-custom mx-auto text-center'>We craft digital experiences</h1>
    </div>
    <ScrollTechnolgy />
    </> 
  )
}

export default ScrollText