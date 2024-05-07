import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ourWorks } from '../Components/Works/workData';
import transition from '../transition';
import LazyLoad from 'react-lazy-load';
import { useInView } from 'react-intersection-observer';
import soundOnImage from '../Components/Assets/on.png';
import soundOffImage from '../Components/Assets/off.png';

const SinglePageOfWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSoundOn, setIsSoundOn] = useState(false); // State to manage sound
  const sliderRef = useRef(null);
  const { workID } = useParams();
  const work = ourWorks?.find((ad) => ad.id == workID);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  if (!work) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
  }

  const { workName, textDescription, workDescription, firstSinglePhoto, secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto } = work;

  const mediaItems = [secondSinglePhoto, thirdSinglePhoto, fourthSinglePhoto, fifthSinglePhoto, sixthSinglePhoto, seventhSinglePhoto];

  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <div>
      <div className="py-0 md:py-[50px] bg-black lg:px-[50px]">
        <div className="flex flex-col lg:flex-row p-4 lg:p-0">
          <h1 className="text-4xl md:text-[33px] text-white font-bold font-custom leading-[47px]">
            {workName}
            <p className='font-custom1 mt-[11px] text-lg text-white w-[207px] font-normal leading-[24px]'></p>
          </h1>
          <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-fit 2xl:w-1/2 text-lg font-medium font-custom1 text-white">
            {textDescription}
          </span>
        </div>
      </div>

      <div className="w-full h-80 lg:h-screen bg-black px-3 lg:px-[50px]">
        <LazyLoad height='100%'>
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full lg:h-[555px] 2xl:h-[100vh] object-cover"
            src={firstSinglePhoto}
            alt=""
          />
        </LazyLoad>
      </div> 

      <div className='grid grid-cols-1 bg-black lg:grid-cols-2 px-3 lg:px-[50px] py-[20px] lg:py-[15px] gap-x-[20px] gap-y-[20px] lg:gap-y-[23px] overflow-hidden'>
        {mediaItems?.map((media, index) => (
          <div key={index} className="w-full h-80 lg:h-fit relative">
            <LazyLoad height='100%'>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className="w-full h-80 lg:h-[510px] 2xl:h-[82vh] object-cover"
              >
                {media && (media.endsWith('.mp4') ? (
                  <>
                    <video className="w-full h-full object-cover" autoPlay playsInline loop muted={!isSoundOn}>
                      <source src={media} type="video/mp4" />
                    </video>
                    <button onClick={toggleSound} className="absolute bottom-2 left-0">
                      <img className='object-cover w-4 h-4' src={isSoundOn ? soundOnImage : soundOffImage} alt={isSoundOn ? 'Sound On' : 'Sound Off'} />
                    </button>
                  </>
                ) : (
                  <img src={media} alt='' className="w-full h-full object-cover" />
                ))}
              </motion.div>
            </LazyLoad>
          </div>
        ))}
      </div>
    </div>
  );
};

export default transition(SinglePageOfWork);




// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import FetchData from '../Components/hooks/FetchData';

// const SinglePageOfWork = () => {
//   const apiUrl = "http://localhost:1337";
//   const { id } = useParams();
//   const { loading, error, data } = FetchData(`${apiUrl}/api/works/${id}?populate=*`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   const firstImageUrl = data?.data?.attributes?.firstPhoto?.data[0]?.attributes?.url;
//   const secondImageUrl = data?.data?.attributes?.secondPhoto?.data[0]?.attributes?.url;
//   const thirdImageUrl = data?.data?.attributes?.thirdPhoto?.data[0]?.attributes?.url;
//   const websiteLink = data?.data?.attributes?.websiteLink;

//   const mediaItems = [secondImageUrl, thirdImageUrl];

//   return (
//     <>
//       <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
//         <div className="flex flex-col lg:flex-row p-4 lg:p-0">
//           <h1 className="text-4xl md:text-[33px] font-bold font-custom leading-[47px]">
//             {data?.data?.attributes?.clientName}
//             <p className='font-custom1 mt-[11px] text-lg text-[#979797] w-[207px] font-normal leading-[24px]'>
//               {data?.data?.attributes?.category}
//             </p>
//           </h1>
//           <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
//             {data?.data?.attributes?.description}
//           </span>
//         </div>
//       </div>

//       <div className="w-full h-64 lg:h-[504px] mt-[35px] px-3 lg:px-[50px] overflow-hidden relative">
//         {firstImageUrl?.endsWith('.mp4') ? (
//           <video className="w-full h-full object-cover" autoPlay loop muted>
//             <source src={`${apiUrl}${firstImageUrl}`} type="video/mp4" />
//           </video>
//         ) : (
//           <img
//             className="w-full h-full object-cover"
//             src={`${apiUrl}${firstImageUrl}`}
//             alt={`Slide 1`}
//           />
//         )}
//       </div>

//       <div className='grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-[50px] mt-[23px] gap-x-4 gap-y-4 lg:gap-y-0'>
//         {mediaItems.map((media, index) => (
//           <div key={index} className="w-full h-56 lg:h-[510px] relative">
//             {media.endsWith('.mp4') ? (
//               <video className="w-full h-full object-cover" playsInline autoPlay controls>
//                 <source src={`${apiUrl}${media}`} type="video/mp4" />
//               </video>
//             ) : (
//               <img src={`${apiUrl}${media}`} alt='Media' className="w-full h-full object-cover" />
//             )}
//           </div>
//         ))}
//       </div>

//       {websiteLink && (
//         <div className="mt-4 px-3 lg:px-[50px]">
//           <a
//             href={websiteLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline"
//           >
//             {websiteLink}
//           </a>
//         </div>
//       )}
//     </>
//   );
// };

// export default SinglePageOfWork;
