import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import officeImage1 from "../Assets/firstOffice.png";
import officeImage2 from "../Assets/office5.png";

const imgs = [
  {
    src: officeImage1,
    text: "Text for image 1",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  },
  {
    src: officeImage2,
    text: "Text for image 2",
    description: "Lorem ipsum dolor sit amet consectour, lorem apis dolis"
  }
];

const ONE_SECOND = 3000;
const AUTO_DELAY = ONE_SECOND ;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 5,
  stiffness: 400,
  damping: 70,
};

const Office = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black pt-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />

    </div>
  );
};

export default Office

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgData, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              position: "relative", // Ensuring relative positioning for text maps
              backgroundImage: `url(${imgData.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 1 : 0.90,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full lg:h-[763px] 2xl:h-[863px] shrink-0 object-cover"
          >
            {/* Text overlay */}
            {imgIndex === idx && (
              <div className="px-4" style={{ position: "absolute", top: "50%", left: "5%", transform: "translate(-5%, -50%)" }}>
                <p className="text-[36px] lg:text-[45px] text-white font-custom">{imgData.text}</p>
                <p className="text-white text-[16px] font-custom1 mt-[24px] lg:w-[514px]">{imgData.description}</p>
              </div>
            )}
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 absolute bottom-2 lg:bottom-16">
      {imgs?.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[6px] w-[20px] transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};



// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import officeImage1 from "../Assets/firstOffice.png";
// import officeImage2 from "../Assets/office5.png";

// const carouselData = [
//   {
//     id: 1,
//     image: officeImage1,
//     title: 'The office 1',
//     description: 'We uncover the hidden pathways, the shifting landscapes, the unnoticed opportunities, and the untouched canvases. Those "in plain sight" revolutions that will reshape your digital presence.',
//   },
//   {
//     id: 2,
//     image: officeImage2,
//     title: 'The office 2',
//     description: 'Another set of compelling content for the second office. Lorem ipsum dolor sit amet consectour adis consectour.',
//   },
// ];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const Office = () => {
//   return (
//     <div className='w-full pt-[115px] bg-black'>
//       <div className='relative'>
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={3000}
//           pauseOnHover={false}
//           showDots={true}
//           arrows={false}
//         >
//           {carouselData.map((item) => (
//             <div key={item.id}>
//               <img src={item.image} alt='' className='w-full h-[70vh] lg:h-[763px] 2xl:h-[100vh] object-cover' />
//               <div className='absolute top-1/2 left-[5px] px-5 lg:px-0 lg:left-[50px]'>
//                 <p className='font-custom lg:text-[45px] text-white'>{item.title}</p>
//                 <p className='lg:w-[514px] h-[62px] text-white mt-[24px]'>{item.description}</p>
//                 <button className='mt-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-white font-custom1 py-2 px-4'>
//                   Show More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Office;
