import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SvgLine from './SvgLine';
import { partnerLogos } from '../Works/clients';

const Clients = () => {
  const [showMore, setShowMore] = useState(false);
  const partnersToShow = showMore ? 25 : 8;

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
    <div key={inView} ref={ref} className="bg-black flex flex-col lg:flex-row lg:justify-between py-12 md:pb-44 lg:px-[50px]">
      <div className="px-4 flex flex-col lg:flex-row">
      <div className='lg:hidden lg:ml-20'>
        <h1 className="text-4xl lg:text-[45px] text-white font-bold font-custom leading-[.957142857] lg:leading-[55px]">
          Our beloved partners
          <SvgLine />
        </h1>
        {/* <button
          onClick={() => setShowMore(!showMore)}
          className="my-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 ml-5 lg:ml-0 md:mt-8  gap-8 px-8 md:px-0 md:gap-8 lg:gap-20 justify-center items-center">
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
        <div className='lg:ml-32 2xl:ml-44'>
        <h1 className="hidden lg:block text-4xl lg:text-[45px] 2xl:w-[410px] text-white font-bold font-custom leading-[.957142857] lg:leading-[55px]">
          Our beloved partners
          <SvgLine />
        </h1>
       
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-12 lg:my-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-white font-custom1 py-2 px-4"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
        </div>
        
      </div>
      </div>
  );
};

export default Clients;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import FetchData from '../hooks/FetchData';

// const Clients = () => {
//   const apiUrl = "http://localhost:1337";

//   const [hoveredMember, setHoveredMember] = useState(null);
//   const [showMore, setShowMore] = useState(false);
//   const partnersToShow = showMore ? 25 : 10;

//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.2,
//   });

//     const sortDataById = (data) => {
//       return data?.data?.sort((a, b) => {
//         return b.id - a.id;
//       });
//     };

//   const { loading, error, data } = FetchData(`${apiUrl}/api/clients?populate=*`);
//   const sortedData = sortDataById(data);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   const slideInVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: (index) => ({
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.5, delay: index * 0.1 },
//     }),
//   };

//   return (
//     <div key={inView} ref={ref} className="lg:flex lg:justify-between py-0 md:py-4 lg:px-[50px]">
//       <div className="px-4">
//         <h1 className="text-4xl lg:text-[45px] font-bold font-custom leading-[.957142857] lg:leading-[55px]">
//           Our beloved<br />partners
//         </h1>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 ml-4 md:mt-8 md:ml-16 lg:mt-24 lg:ml-72 2xl:ml-72 gap-8 px-8 md:px-0 md:gap-8 lg:gap-20 justify-center items-center">
//           <AnimatePresence>
//             {sortedData
//               ?.slice(0, partnersToShow)
//               .map((partner, index) => (
//                 <motion.div
//                   key={index}
//                   className="grid-item"
//                   variants={slideInVariants}
//                   initial="hidden"
//                   animate={inView ? 'visible' : 'hidden'}
//                   exit="hidden"
//                   custom={index}
//                   onMouseEnter={() => setHoveredMember(partner.id)}
//                   onMouseLeave={() => setHoveredMember(null)}
//                 >
//                   <motion.img
//                     src={`${apiUrl}${hoveredMember === partner.id ? partner?.attributes?.hoverImage?.data?.attributes?.url : partner?.attributes?.image?.data?.attributes?.url}`}
//                     alt={partner.alt}
//                     className="w-24 h-8 object-contain md:w-32 md:h-10 lg:w-44 lg:h-12"
//                   />
//                   <p>{partner?.attributes?.name}</p>
//                 </motion.div>
//               ))}
//           </AnimatePresence>
//         </div>

//         <button
//           onClick={() => setShowMore(!showMore)}
//           className="my-12 lg:mt-[120px] w-[207px] text-black hover:bg-black transition duration-500 ease-linear hover:text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4"
//         >
//           {showMore ? 'Show Less' : 'Show More'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Clients;