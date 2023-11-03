import React from 'react';

const App = () => {
  return (
    <>
    <div className=" flex flex-col lg:flex-row py-4 lg:py-[97px] lg:px-[50px]">
    <div className="lg:w-1/2 p-4 flex flex-col lg:order-1">
    <h1 className="text-5xl font-bold font-custom leading-[47px]">We unveil <br />the unseen</h1>
    <p className="md:hidden my-6 text-[#979797] font-custom1 text-base leading-normal">
      We uncover the hidden pathways, the shifting landscapes, the unnoticed opportunities, 
      and the untouched canvases. Those "in plain sight" revolutions that will reshape your 
      digital presence. <br /> <br />We provide the entrance and the exit strategy, the subtle 
      adjustments that wield significant impact, and the grand ideas that will redefine your brand journey.<br /> <br />
      Our expertise encompasses profound insights, cutting-edge design, and captivating storytelling. Whether you
      represent a well-established brand or a rising star, we offer a perspective that breaks the mold and sets 
      your digital presence apart.
    </p>
    <button className="my-6 lg:mt-[150px] w-[207px] text-black hover:bg-black transition duration-500 ease-in-out hover:text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
      About us
    </button>
  </div>
  <div className="lg:w-1/2 p-2 lg:order-2">
    <p className="hidden 2xl:w-[50vh] md:block text-[#979797] font-custom1 text-base leading-normal">
      We uncover the hidden pathways, the shifting landscapes, the unnoticed opportunities, 
      and the untouched canvases. Those "in plain sight" revolutions that will reshape your 
      digital presence. <br /> <br />We provide the entrance and the exit strategy, the subtle 
      adjustments that wield significant impact, and the grand ideas that will redefine your brand journey.<br /> <br />
      Our expertise encompasses profound insights, cutting-edge design, and captivating storytelling. Whether you
      represent a well-established brand or a rising star, we offer a perspective that breaks the mold and sets 
      your digital presence apart.
    </p>
  </div>
  
</div>
      <div className='flex relative justify-between items-center px-[16px] lg:px-[66px]'>
        <div className="h-[1px] bg-black flex-grow mt-[-60px] md:mt-[-150px] "></div>
      </div>
        </>
  );
};

export default App;
