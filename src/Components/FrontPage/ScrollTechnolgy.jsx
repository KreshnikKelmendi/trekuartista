// import React from 'react'

// const dataTechnology = [
//     {
//      id:1,
//      name: "UI-UX DESIGN CONCEPTS",
//      description: "Having understood your requirements we embark on a creative journey to develop design ideas. We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert. Having understood your requirements we embark on a creative journey to develop design ideas. We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert."
//     }
// ]

// const ScrollTechnolgy = () => {
//   return (
//     <div className='text-white bg-black'>
//         <div className='w-full px-[50px]'>
//             <div className='w-full flex'>
//                 {dataTechnology?.map((item) => (
//                     <>
//                       <div className='w-1/2'>
//                         <p className='font-custom text-[45px] w-[348px] leading-[115%]'>{item?.name}</p>
//                       </div>
//                       <div className='w-1/2'>
//                         <p className='2xl:w-[665px] font-custom1 text-[16px]'>{item.description}</p>
//                       </div>
//                     </>   
//                 ))}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ScrollTechnolgy

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import officeImage1 from "../Assets/firstOffice.png";
import officeImage2 from "../Assets/office5.png";

const data = [
  { id:1, name: "UI/X DESIGN CONCEPT", description: "Lorem ipsum dolor sit amet consectotiu"},
  { id:2, name: "UI/X DESINGFDFDF CONCEPT", description: "Lorem ipsum dolor sit amet consectotiu"},
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

const ScrollTechnolgy = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === data.length - 1) {
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

    if (x <= -DRAG_BUFFER && imgIndex < data.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black py-8">
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

export default ScrollTechnolgy

const Images = ({ imgIndex }) => {
  return (
    <>
      {data?.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
           
            animate={{
              scale: imgIndex === idx ? 1 : 1,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full lg:h-[763px] shrink-0 flex object-cover justify-evenly px-[50px]"
          >
            <p className="text-white text-[45px] font-custom">{imgSrc.name}</p>
            <p className="text-white font-custom1">{imgSrc?.description}</p>
          </motion.div>
          
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 absolute bottom-16">
      {data?.map((_, idx) => {
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