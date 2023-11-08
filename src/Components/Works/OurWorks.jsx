import React from 'react'
import work1 from "../Assets/groupICEtea.png"
import work2 from "../Assets/gjelber.png"

const ourWorks = [
    { 
      id:1,
      workImage: work1,
      workName: "ICE TEA - JAFFA",
      workDescription: "Bottle / Mokne / Logo / Design / Brand Strategy Natyral Watter from Istog" 
    },

    { id:2,
      workImage: work2,
      workName: "Green - holtikultura",
      workDescription: "Green / Gjelbert / Logo / Design / Brand Strategy Natyre in Pristina" 
    }
]

const OurWorks = () => {
  return (
    <div className='w-full'>
       <div className='grid grid-cols-1 lg:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px]'>
          {ourWorks?.map((work) => (
            <div key={work.id}>
                <img src={work.workImage} alt="" />
                <p className='mt-[30px] font-custom2 font-extrabold text-[22px]'>{work.workName}</p>
                <p className='w-full lg:w-[403px] font-custom1 font-medium text-[#979797]'>{work.workDescription}</p>
            </div>
          ))}
       </div>
    </div>
  )
}

export default OurWorks