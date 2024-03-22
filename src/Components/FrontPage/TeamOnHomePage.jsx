import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { teamMembers } from '../TeamPage/teamMembers';
import SvgLine2 from './SvgLine2';

const TeamOnHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(calculateSlidesPerPage());
  const [touchStartX, setTouchStartX] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  function calculateSlidesPerPage() {
    if (window.innerWidth < 768) {
      return 1;
    } else {
      return 4;
    }
  }

  const controls = useAnimation();

 const nextSlide = () => {
  const next = currentSlide + slidesPerPage;
  controls.start({
    x: -((next % teamMembers.length) * (100 / slidesPerPage)),
    transition: { type: 'tween', duration: 0.5 },
  });
  setCurrentSlide(next >= teamMembers.length ? 0 : next);
};

  const prevSlide = () => {
    let prev = currentSlide - slidesPerPage;
    if (prev < 0) {
      prev = teamMembers.length - (teamMembers.length % slidesPerPage);
      if (prev === teamMembers.length) {
        prev = teamMembers.length - slidesPerPage;
      }
    }
    setCurrentSlide(prev);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Adjust the sensitivity according to your preference
    if (deltaX > 50) {
      prevSlide();
      setTouchStartX(null);
    } else if (deltaX < -50) {
      nextSlide();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused]);

  return (
    <div
      className="py-0  "
      onTouchStart={isMobile ? handleTouchStart : null}
      onTouchMove={isMobile ? handleTouchMove : null}
      onTouchEnd={isMobile ? handleTouchEnd : null}
    >
      <div className="flex flex-col lg:flex-row py-10">
        <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold px-5 lg:px-[50px] font-custom leading-[47px]">
          Our people <SvgLine2 />
          {/* <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='ml-6 mt-3'
          >
            <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A"/>
            </svg>
          </motion.div> */}
        </h1>
        <p className='lg:w-[665px] h-[160px] px-5 lg:px-0 lg:ml-16 font-custom1'>
          We uncover the hidden pathways, the shifting landscapes, the unnoticed opportunities, 
          and the untouched canvases. Those "in plain sight" revolutions that will reshape your 
          digital presence.
          <br /> <br />
          We provide the entrance and the exit strategy, the subtle adjustments that wield significant 
          impact, and the grand ideas that will redefine your brand journey.
        </p>

        {/* <div className="flex cursor-pointer">
          <svg
            onClick={prevSlide}
            width="20"
            height="20"
            viewBox="0 0 31 32"
            fill={isMobile ? '#1E1E1E' : 'black'}
            xmlns="http://www.w3.org/2000/svg"
            className='hover:fill-[#DF319A]'
          >
            <path d="M15.3755 31.6064L15.3611 28.3108L15.3446 24.6863L15.3399 21.8635L15.3251 17.4511L15.3078 12.655L15.2951 8.5852L15.281 5.33069L15.2709 2.70653L15.2603 0.000157L1.71837e-05 15.7439L15.3755 31.6064Z" />
          </svg>
          <svg
            onClick={nextSlide}
            width="20"
            height="20"
            viewBox="0 0 31 32"
            fill={isMobile ? '#1E1E1E' : 'black'}
            xmlns="http://www.w3.org/2000/svg"
            className='hover:fill-[#DF319A]'
          >
            <path d="M15.2603 0L15.2746 3.29562L15.2911 6.92012L15.2958 9.74293L15.3107 14.1553L15.328 18.9514L15.3406 23.0212L15.3547 26.2758L15.3648 28.8999L15.3755 31.6063L30.6357 15.8626L15.2603 0Z" />
          </svg>
        </div> */}
      </div>

      <div className="flex overflow-hidden mt-10 bg-black">
        {teamMembers.slice(currentSlide, currentSlide + slidesPerPage).map((member, index) => (
          <motion.div
            key={member.id}
            className={`w-full ${isMobile ? 'md:w-full lg:w-full' : 'md:w-1/2 lg:w-1/3'} flex-1 hover:flex-[2] hover:transition-all hover:duration-500 hover:ease-linear lg:mt-0 justify-center text-white text-[18px]`}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <div className="rounded-lg">
              <motion.img
                src={member.image}
                alt={member.name}
                className={`w-full h-[50vh] md:h-[90vh] object-cover cursor-pointer ${
                                    index === 0 ? 'active-slide' : ''
                                  }`}
                
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
               <div className='flex justify-between items-center'>
        <div className='mx-2'>
          <h2 className="text-lg font-custom1 font-semibold mt-2">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
       
      </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


export default TeamOnHomePage;

