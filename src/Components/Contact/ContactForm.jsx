import React from 'react'
import pinkLogo from "../Assets/pinkLogo.png"
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-black text-white lg:flex-row md:px-[50px] mt-[97px]">
    {/* First Div */}
    <div className="w-full lg:w-1/2 flex px-4 flex-col lg:py-[85px]">
        <div className="h-full">
            <h1 className="text-4xl flex md:text-5xl lg:text-[33px] font-bold font-custom leading-[47px]">
              GET IN TOUCH
              <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] ml-4 object-cover" alt="" />
        </motion.div>
            </h1>
            <p className="text-base py-[34px] font-custom1 font-thin md:w-[425px]">
               We like working together and performing professionally.<br /> <br />
               Our team includes experienced business strategists, communication specialists, graphic 
               and web designers, 3D animators, drawing illustrators, and programmers, ensuring that our 
               clients receive professionalism and polish.
            </p>
        </div>
    </div>
  </div>
  )
}

export default ContactForm