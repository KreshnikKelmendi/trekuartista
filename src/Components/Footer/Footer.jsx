import React from 'react';
import footerLogo from "../Assets/trekuartistaLogoFooter.png";
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';

const Footer = () => {
  return (
    <>
    <div className='bg-black mt-[88px]  px-4 md:px-8 lg:px-12 text-white'>
      <div className='px-[30px] md:py-12 lg:py-20 flex flex-col md:flex-col lg:flex-row justify-between'>
        <div className='text-center lg:text-left mt-10 lg:mt-5'>
          <img src={footerLogo} className='w-[220px] h-[26px] object-cover mx-auto lg:mx-0' alt='' />
          <p className='font-custom text-xl mt-[20px]'>
            We drive your business growth
          </p>
          <p className='font-custom1 text-base mt-[20px] font-light'>Trekuartista, 2023.</p>
        </div>
        <div className='mt-8 md:mt-0 flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-start'>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-[#DF319A]'>
              Company
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Blog
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Careers
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Pricing
            </a>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-[#DF319A]'>
              Resources
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Documentation
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Papers
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Press Conferences
            </a>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-[#DF319A]'>
              Legal
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Terms of Service
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Privacy Policy
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Cookies Policy
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Data Processing
            </a>
          </div>
        </div>
      </div>
      <hr className="mx-[28px] border-t-[1px] border-white" />
      <div className="flex lg:px-[30px] flex-col lg:flex-row items-center justify-between py-[38px]">
        <p className='text-base font-custom1 font-light'>
        © 2023 Trekuartista L.L.C All rights reserved.
        </p>
        <div className="flex space-x-16 mt-10 lg:mt-0">
        <a href='https://www.instagram.com/trekuartista/' target='_blank' rel="noreferrer" className='text-white text-[25px] hover:text-[#DF319A]'>
            <i className="fab fa-instagram"></i>
          </a>
          <a href='https://www.facebook.com/Trekuartista.LLC' target='_blank' rel="noreferrer" className='text-white text-[25px] hover:text-[#DF319A]'>
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href='https://www.linkedin.com/company/trekuartista-advertising-agency/mycompany/' rel="noreferrer" target='_blank' className='text-white text-[25px] hover:text-[#DF319A]'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
       
      </div>
        <ScrollToTopButton />
    </div>
    
       </>
  );
};

export default Footer;
