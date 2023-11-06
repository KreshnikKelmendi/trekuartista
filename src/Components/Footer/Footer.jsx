import React from 'react';
import footerLogo from "../Assets/trekuartistaLogoFooter.png";

const Footer = () => {
  return (
    <div className='bg-black mt-[88px]  px-4 md:px-8 lg:px-12 text-white'>
      <div className='max-w-screen-xl md:py-12 lg:py-20 mx-auto flex flex-col md:flex-row justify-between'>
        <div className='text-center md:text-left mt-10 lg:mt-5'>
          <img src={footerLogo} className='w-[220px] h-[26px] object-cover mx-auto lg:mx-0' alt='' />
          <p className='font-custom text-xl mt-[20px]'>
            We drive your business growth
          </p>
          <p className='font-custom1 text-base mt-[20px] font-light'>Trekuartista, 2023.</p>
        </div>
        <div className='mt-8 md:mt-0 md:flex md:space-x-8 lg:space-x-16 text-center lg:text-start'>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-blue-400'>
              Company
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Blog
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Careers
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Pricing
            </a>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-blue-400'>
              Resources
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Documentation
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Papers
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Press Conferences
            </a>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-blue-400'>
              Legal
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Terms of Service
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Privacy Policy
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Cookies Policy
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-blue-400'>
              Data Processing
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t-[1px] border-white" />
      <div className="flex px-[5px] flex-col lg:flex-row items-center justify-between py-[38px]">
        <p className='text-base font-custom1 font-light'>
        © 2023 Trekuartista L.L.C All rights reserved.
        </p>
        <div className="flex space-x-16 mt-10 lg:mt-0">
        <a href='#' className='text-white text-[25px] hover:text-blue-400'>
            <i className="fab fa-instagram"></i>
          </a>
          <a href='#' className='text-white text-[25px] hover:text-blue-400'>
            <i className="fab fa-facebook"></i>
          </a>
          <a href='#' className='text-white text-[25px] hover:text-blue-400'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
