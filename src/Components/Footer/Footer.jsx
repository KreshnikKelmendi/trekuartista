import React from 'react';
import footerLogo from "../Assets/trekuartistaLogoFooter.png";
import ScrollToTopButton from '../ScrollToTop/ScrollToTopButton';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='bg-black px-4 md:px-8 lg:px-12 text-white'>
      <div className='py-16 z-50 md:py-12 lg:py-20 2xl:py-44 flex flex-col md:flex-col lg:flex-row justify-between'>
        <div className='text-center lg:text-left mt-10 lg:mt-5'>
          <img src={footerLogo} className='w-[220px] h-[26px] object-cover mx-auto lg:mx-0' alt='' />
          <p className='font-custom text-xl mt-[20px]'>
            We drive your business growth
          </p>
          <p className='font-custom1 text-base mt-[20px] font-light'>Trekuartista, 2024.</p>
        </div>
        <div className='mt-8 md:mt-0 flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-start'>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Home
            </Link>
            <Link to="/about-trekuartista" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                About us
            </Link>
            <Link to="/our-works" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Work
            </Link>
            <Link to="/our-team" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Team
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0 })} className='text-base font-custom1 hover:text-[#DF319A]'>
                Contact
            </Link>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base font-custom1 font-semibold hover:text-[#DF319A]'>
              WHAT WE DO
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Drive success
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Marketing strategies
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Brand Identities
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Advertising
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Consulting and Training
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Web  Design & Development
            </a>
          </div>
          <div className='text-white py-10 lg:py-0 flex flex-col space-y-[23px]'>
            <a href='#' className='text-base line-through font-custom1  font-semibold hover:text-[#DF319A]'>
              WHAT WE DON'T
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Work on weekends
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Say no to coffee
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Take no for an answer
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Accept mediocrity
            </a>
            <a href='#' className='text-base font-custom1 font-light hover:text-[#DF319A]'>
              Sacrifice quality for profit
            </a>
          </div>
        </div>
      </div>
      {/* <hr className="mx-[28px] border-t-[1px] border-white" /> */}
      <div className="flex flex-col lg:flex-row items-center justify-between py-[38px]">
        <p className='text-base font-custom1 font-light'>
        © 2024 Trekuartista L.L.C All rights reserved.
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
