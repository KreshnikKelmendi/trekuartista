import React from 'react'
import firstPhoto from "../Assets/office1.png"
import secondPhoto from "../Assets/office2.png"
import thirdPhoto from "../Assets/officeTreku.png"
import fourthPhoto from "../Assets/office5.png"

const SpaceOffice = () => {
  return (
    <>
    <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          Our space
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-base font-medium font-custom1 text-[#1E1E1E]">
          Trekuartista is an advertising agency providing full-scale marketing services. <br /> <br />
          Founded in 2012 in Prishtina, we have consistently garnered successful outcomes for clients through creative and aggressive marketing strategies.
          We believe in research-based recommendations, close tracking wherever possible, and exceptional creative work.
        </span>
      </div>
    </div>
      <div className='w-full flex lg:pt-[33px] lg:px-[50px]'>
        <div className='w-1/2 flex flex-col'>
          <img className='flex-grow m-3' src={firstPhoto} alt="" />
          <img className='flex-grow m-3' src={thirdPhoto} alt="" />
        </div>
        <div className='w-1/2 flex flex-col'>
          <img className='flex-grow m-3' src={secondPhoto} alt="" />
          <img className='flex-grow m-3' src={fourthPhoto} alt="" />
        </div>
      </div>
    </>
  )
}

export default SpaceOffice