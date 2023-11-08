import React from 'react'
import pinkLogo from "../Assets/pinkLogo.png";
import { motion } from 'framer-motion';
import work1 from "../Assets/groupICEtea.png"
import work2 from "../Assets/gjelber.png"
import work3 from "../Assets/DokuTechFinal.mp4"
import work4 from "../Assets/mokne.png"
import work5 from "../Assets/termokos.png"

const ourWorks = [
    { 
      id:1,
      workImage: work1,
      workName: "ICE TEA - JAFFA",
      workDescription: "Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog" 
    },

    { id:2,
      workImage: work2,
      workName: "Gjelbër - holtikultura",
      workDescription: "Gjelbër / Logo / Design / Brand Strategy Natyre in Pristina" 
    },
    {
      id:3,
      workImage: work4,
      workName: "MOKNE",
      workDescription: "Bottle / Mokne / Logo / Design Brand Strategy / Natyral Watter from Istog"
    },{
      id:4,
      workImage: work5,
      workName: "TERMOKOS",
      workDescription: "Brand / Logo"
    },{
      id:5,
      workImage: work5,
      workName: "TERMOKOS",
      workDescription: "Brand / Logo"
    }
]

const OurWorks = () => {
  return (
    <>
   
   <div className='grid grid-cols-1 lg:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0'>
        {ourWorks.slice(0, 2).map((work) => (
          <div key={work.id}>
            <img src={work.workImage} alt="" />
            <p className='mt-[30px] font-custom2 font-extrabold text-[22px]'>{work.workName}</p>
            <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>{work.workDescription}</p>
          </div>
        ))}
      </div>


<div className='px-5 lg:px-[50px] mt-5'>
  
   <>
      <video src={work3} autoPlay muted loop playsInline controls alt="" className='h-[50vh] lg:h-[391px] w-full object-cover' />
      <p className='mt-[30px] flex font-custom2 font-extrabold text-[22px]'>DOKUTECH
      <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={pinkLogo} className="w-8 md:w-10 lg:w-[40px] h-8 md:h-10 lg:h-[34px] mt-1 ml-4 object-cover" alt="" />
        </motion.div></p>
      
      <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>Campaign / Dokutech / Design / Logo</p>
   </>
 
</div>

<div className='grid grid-cols-1 lg:grid-cols-3 py-[25px] mt-[49px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0'>
        {ourWorks.slice(2).map((work) => (
          <div key={work.id}>
            <img src={work.workImage} alt="" />
            <p className='mt-[30px] font-custom2 font-extrabold text-[22px]'>{work.workName}</p>
            <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>{work.workDescription}</p>
          </div>
        ))}
      </div>


</>
  )
}

export default OurWorks