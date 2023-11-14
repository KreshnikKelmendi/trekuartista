import React from 'react';
import { useParams } from 'react-router-dom';
import { ourWorks } from '../Components/Works/workData';

const SinglePageOfWork = () => {
  const { workID } = useParams();
  const ad = ourWorks.find((ad) => ad.id == workID);

  if (!ad) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
  }

  const { workName, textDescription, workDescription, firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto } = ad;

  return (
    <>
    <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
          {workName}
          <p className='font-custom1 mt-[11px] text-lg text-[#979797] w-[207px] font-normal leading-[24px]'>{workDescription}</p>
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
          {textDescription}
        </span>
      </div>
    </div>

        <div className='w-full h-full mt-[35px] px-3 lg:px-[50px]'>
          <img className='w-full h-[504px] object-cover' src={firstSinglePhoto} alt='' />
        </div>

        <div className='grid grid-cols-2 px-[50px] mt-[23px] gap-x-[20px]'>
          <img src={secondSinglePhoto} alt='' />
          <img src={thirdSinglePhoto} alt='' />
        </div>
</>
  )
};

export default SinglePageOfWork;
