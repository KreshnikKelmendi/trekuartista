import React from 'react';
import image1 from "../Assets/office2.png";


const ServicesOnAbout = () => {
  return (
    <div className="bg-black flex text-white py-0 lg:px-[50px]">
      <div className="flex flex-col p-4 md:py-[100px]">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          Services
        </h1>
        <p className='font-custom1 text-base w-[100%] md:w-[433px] mt-[35px]'>
          We enjoy working together and operating with professionalism.
          <br /> <br />
          By offering a diverse scale of services such as: 
          Communication strategies; Integrated marketing campaigns; 
          Brand building from scratch; Advertising; Media Services; 
          Digital animation; Campaign management; Digital Print (Indoor & Outdoor) & Promotional;
          Supply; PR - Public Relations; Direct Marketing; B2B; CRM 
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-x-[19px] md:py-[50px]'>
        <img className='w-[100%] md:w-[208px] h-[auto] md:h-[494px] object-cover' src={image1} alt="" />
        <img className='w-[100%] md:w-[208px] h-[auto] md:h-[494px] object-cover' src={image1} alt="" />
        <img className='w-[100%] md:w-[208px] h-[auto] md:h-[494px] object-cover' src={image1} alt="" />
        <img className='w-[100%] md:w-[208px] h-[auto] md:h-[494px] object-cover' src={image1} alt="" />
      </div>
    </div>
  );
};

export default ServicesOnAbout;
