import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { ourWorks } from '../Works/workData';

const textVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const slideInVariants = (index) => ({
  hidden: { y: '40%', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay: -(index * 0.2) },
  },
});

const Newest = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className="py-0 md:py-2 " ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={slideInVariants}
      >
        <div className="px-4 flex items-center">
          {/* <h1 className="flex text-[42px] md:text-5xl lg:text-[45px] font-bold font-custom leading-[40px]">
          FRESH VENTURES
          </h1> */}
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {ourWorks?.slice(0, 6).map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={slideInVariants(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {/* <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <p className='font-custom1 text-base hover:text-[#DF319A] font-normal text-[#979797] lg:w-[85vh] 2xl:w-[433px]'>
                  {item?.workDescription}
                </p>
              </Link> */}
              <div className="relative w-full h-full ">
                {item?.workImage?.endsWith('.mp4') ? (
                  <video className="w-full h-[100%] lg:h-[100vh] object-cover" autoPlay playsInline loop muted>
                    <source src={item?.workImage} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    className="w-full h-[40vh] lg:h-[100vh] object-cover"
                    src={item?.workImage}
                    alt=""
                  />
                )}
                <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-800 bg-opacity-80 cursor-pointer p-2 h-[40vh] lg:h-[100vh]"
                    >
                      <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className='font-custom2 text-[33px] font-normal'
                      >
                        {item.workName}
                      </motion.p>
                      <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        className='font-custom1 text-lg font-normal'
                      >
                        {item.hoverText}
                      </motion.p>
                    </motion.div>
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='justify-center items-center text-center'>
          <Link 
            to="/our-works" 
            onClick={() => window.scrollTo({
              top: 0,
              left: 0,
            })}>
            <button className="mt-[60px] w-[207px] text-black hover-bg-black transition duration-500 ease-in-out hover:text-white hover:bg-black text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
              View more
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Newest;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';
// import FetchData from '../hooks/FetchData';

// const textVariants = {
//   hidden: { y: 10, opacity: 0 },
//   visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
// };

// const slideInVariants = (index) => ({
//   hidden: { x: '-40%', opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.9, ease: 'easeOut', delay: index * 0.2 },
//   },
// });

// const Newest = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(-1);
//   const [ref, inView] = useInView({ triggerOnce: true });

//   const apiUrl = "http://localhost:1337";
//   const { loading, error, data } = FetchData(`${apiUrl}/api/works?populate=*`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   return (
//     <div className="py-0 md:py-2 lg:px-[50px]" ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={inView ? 'visible' : 'hidden'}
//         variants={slideInVariants()}
//       >
//         <div className="px-4 flex mt-14 items-center">
//           <h1 className="flex text-[42px] md:text-5xl lg:text-[45px] font-bold font-custom leading-[40px]">
//             Newest
//           </h1>
//           <motion.div
//             initial={{ scale: 1 }}
//             animate={{ scale: [1, 1.3, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className='ml-6 mt-3'
//           >
//             <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A"/>
//             </svg>
//           </motion.div>
//         </div>
//         <div className="grid md:grid-cols-2 gap-y-12 lg:gap-y-[84px] mx-2 mt-[50px]">
//           {data?.data?.slice(0, 4).map((item, index) => (
//             <motion.div
//               key={index}
//               className="relative mx-2"
//               initial="hidden"
//               animate={inView ? 'visible' : 'hidden'}
//               variants={slideInVariants(index)}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(-1)}
//             >
//               <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                 <p className='font-custom1 text-base hover:text-[#DF319A] font-normal text-[#979797] lg:w-[60vh] 2xl:w-[433px]'>
//                   {item?.attributes?.descriptionCategory}
//                 </p>
//               </Link>
//               <div className="relative w-full h-full mt-4">
//                 {item?.attributes?.image?.data?.attributes?.url?.endsWith('.mp4') ? (
//                   <video className="w-full h-[40vh] lg:h-[504px] object-cover" autoPlay playsInline loop muted>
//                     <source src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.url}`} type="video/mp4" />
//                   </video>
//                 ) : (
//                   <img
//                     className="w-full h-[40vh] lg:h-[504px] object-cover"
//                     src={`${apiUrl}${item?.attributes?.image?.data?.attributes?.url}`}
//                     alt={`Slide 1`}
//                   />
//                 )}

//                 <Link to={`/our-works/${item.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                   {hoveredIndex === index && (
//                     <motion.div
//                       className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gray-800 bg-opacity-80 cursor-pointer p-2 h-[40vh] lg:h-[504px]"
//                     >
//                       <motion.p
//                         variants={textVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className='font-custom2 text-[33px] font-normal'
//                       >
//                         {item?.attributes?.clientName}
//                       </motion.p>
//                       <motion.p
//                         variants={textVariants}
//                         initial="hidden"
//                         animate="visible"
//                         className='font-custom1 text-center text-lg font-normal'
//                       >
//                         {item?.attributes?.descriptionCategory}
//                       </motion.p>
//                     </motion.div>
//                   )}
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//         <div className='justify-center items-center text-center'>
//           <Link 
//             to="/our-works" 
//             onClick={() => window.scrollTo({
//               top: 0,
//               left: 0,
//             })}>
//             <button className="mt-[60px] w-[207px] text-black hover-bg-black transition duration-500 ease-in-out hover:text-white hover:bg-black text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
//               View more
//             </button>
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Newest;
