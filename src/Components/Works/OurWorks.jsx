import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ourWorks } from './workData';
import work3 from "../Assets/DokuTechFinal.mp4"

const OurWorks = () => {
  return (
    <>
   
   <div className='grid grid-cols-1 lg:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0'>
        {ourWorks.slice(0, 2).map((work) => (
          <div key={work.id}>
            <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({
              top: 0,
              left: 0,
              })}>
            <img src={work.workImage} alt="" />
            <p className='mt-[30px] font-custom2 font-extrabold text-[22px]'>{work.workName}</p>
            <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>{work.workDescription}</p>
            </Link>
          </div>
        ))}
      </div>


<div className='px-5 lg:px-[50px] mt-5'>
  
   <>
      <video src={work3} 
             muted 
             loop 
             playsInline 
             autoPlay
             controls 
             alt="" 
             className='h-[50vh] lg:h-[391px] 2xl:h-[450px] w-full object-cover' 
      />
      <p className='mt-[30px] flex font-custom2 font-extrabold text-[22px]'>DOKUTECH
      <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className='ml-3'
        >
          <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A"/>
          </svg>

        </motion.div></p>
      
      <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>Campaign / Dokutech / Design / Logo</p>
   </>
 
</div>

<div className='grid grid-cols-1 lg:grid-cols-3 py-[25px] mt-[49px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0'>
        {ourWorks.slice(2).map((work) => (
          <div key={work.id}>
            <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({
              top: 0,
              left: 0,
              })}>
              <img src={work.workImage} alt="" />
              <p className='mt-[30px] font-custom2 font-extrabold text-[22px]'>{work.workName}</p>
              <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>{work.workDescription}</p>
            </Link>
          </div>
        ))}
      </div>
</>
  )
}

export default OurWorks