import React from 'react';
// import photoTreku from "../Assets/welcome.png";

const FirstContentOfAbout = () => {
  return (
    <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          About us
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
          Trekuartista is an advertising agency providing full-scale marketing services. <br /> <br />
          Founded in 2012 in Prishtina, we have consistently garnered successful outcomes for clients through creative and aggressive marketing strategies.
          We believe in research-based recommendations, close tracking wherever possible, and exceptional creative work.
        </span>
        {/* <div className='flex justify-center items-center ml-0 mt-5 md:mt-0 md:ml-20 xxl:ml-[163px]'>
          <img className='w-[425px] h-[72px] object-contain' src={photoTreku} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default FirstContentOfAbout;
