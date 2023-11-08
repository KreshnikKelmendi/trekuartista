import React from 'react'

const WorkDescription = () => {
  return (
    <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          OUR WORK
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
            We detect the voids, prevailing currents, overlooked areas, and uncharted territories that never crossed your mind.<br/> <br />
            We decipher the narratives, unique perspectives, and avenues to grow your business. We grasp the methods of entrance and exit, 
            whether they involve subtle adjustments that yield substantial outcomes or grand concepts with even more extensive potential 
            than you might initially perceive.
        </span>
      </div>
    </div>
  )
}

export default WorkDescription