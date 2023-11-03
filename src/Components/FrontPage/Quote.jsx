import React from 'react';

const Quote = () => {
  return (
    <div className="bg-black h-[481px] p-4 text-white md:px-8 lg:px-[176px] flex flex-col justify-center items-center mt-20 lg:mx-[65px] text-center">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold font-custom leading-[2.5rem]">
        We see the gaps, trends, blind spots and white spaces. Those ‘right under your nose.
      </h1>
      <div className='mt-4 md:mt-6 lg:mt-8'>
        <p className='text-base md:text-lg lg:text-xl font-custom1'>Arian Ahmeti</p>
        <p className='text-base md:text-lg lg:text-xl font-custom1'>Art Director of Trekuartista</p>
      </div>
    </div>
  );
};

export default Quote;
