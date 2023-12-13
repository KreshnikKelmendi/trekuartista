import React, { useState } from 'react';
import prishtinaHeatSave from '../Assets/prishtinaHeatSave.png';
import sap from '../Assets/sap.png';
import unicef from '../Assets/unicef.png';
import zone from '../Assets/zone.png';
import dokutech from '../Assets/dokutech.png';
import floil from '../Assets/floil.png';
import doni from '../Assets/doni.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients = () => {
  const [showMore, setShowMore] = useState(false);
  const partnersToShow = showMore ? 25 : 10;

  const partnerLogos = [
    { src: prishtinaHeatSave, alt: 'Partner 1' },
    { src: sap, alt: 'Partner 2' },
    { src: unicef, alt: 'Partner 3' },
    { src: sap, alt: 'Partner 4' },
    { src: sap, alt: 'Partner 5' },
    { src: zone, alt: 'Partner 6' },
    { src: sap, alt: 'Partner 7' },
    { src: unicef, alt: 'Partner 8' },
    { src: zone, alt: 'Partner 9' },
    { src: prishtinaHeatSave, alt: 'Partner 10' },
    { src: floil, alt: 'partner 11' },
    { src: dokutech, alt: 'partner 11' },
    { src: doni, alt: 'partner 11' },
    { src: dokutech, alt: 'partner 11' },
    { src: floil, alt: 'partner 11' },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  const slideInVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: index * 0.1 },
    }),
  };

  return (
    <div key={inView} ref={ref} className="lg:flex lg:justify-between py-0 md:py-4 lg:px-[50px]">
      <div className="px-4">
        <h1 className="text-4xl lg:text-[45px] font-bold font-custom leading-[.957142857] lg:leading-[55px]">
          Our beloved<br />partners
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 ml-4 md:mt-8 md:ml-16 lg:mt-24 lg:ml-72 2xl:ml-72 gap-8 px-8 md:px-0 md:gap-8 lg:gap-20 justify-center items-center">
          <AnimatePresence>
            {partnerLogos
              ?.slice(0, partnersToShow)
              .map((partner, index) => (
                <motion.img
                  key={index}
                  src={partner.src}
                  alt={partner.alt}
                  className="w-24 h-8 object-contain md:w-32 md:h-10 lg:w-44 lg:h-12"
                  variants={slideInVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  exit="hidden"
                  custom={index}
                />
              ))}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setShowMore(!showMore)}
          className="my-12 lg:mt-[120px] w-[207px] text-black hover:bg-black transition duration-500 ease-linear hover:text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default Clients;
