import React from 'react';
import pinkLogo from "../Assets/pinkLogo.png";
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="flex flex-col bg-black text-white lg:flex-row md:px-[50px] mt-[97px]">
      {/* First Div */}
      <div className="w-full lg:w-1/2 flex px-4 flex-col py-7 lg:py-[85px]">
        <div className="h-full">
          <h1 className="text-4xl flex md:text-5xl lg:text-[33px] font-bold font-custom leading-[47px]">
            GET IN TOUCH
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-3 lg:mt-0 ml-4 object-contain lg:object-cover" alt="" />
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

      {/* Second Div - Contact Form */}
      <div className="w-full lg:w-1/2 flex px-4 lg:py-[85px]">
        <form className="w-full max-w-md lg:mx-[47px] lg:mt-14 font-custom text-lg">
          <div className="mb-[11px]">
            <input
              type="text"
              id="name"
              name="name"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="text"
              id="company"
              name="company"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Company Name"
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="text"
              id="role"
              name="role"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Your Role"
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-[11px]">
            <input
              type="email"
              id="email"
              name="email"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-[11px]">
            <textarea
              id="message"
              name="message"
              className="w-full py-2 placeholder-[#D9D9D9] text-white bg-black focus:outline-none border-b"
              placeholder="Tell Us how we can help"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mt-4">
          <button className="my-6 w-[207px] text-white hover:bg-white transition duration-500 ease-in-out hover:text-black text-base border border-white font-medium font-custom1 py-2 px-4">
              SUBMIT
         </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
