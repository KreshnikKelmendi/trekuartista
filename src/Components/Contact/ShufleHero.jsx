import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import office1 from "../Assets/office1.png"
import office2 from "../Assets/office2.png"
import office3 from "../Assets/office5.png"

const ShuffleHero = () => {
  return (
    <>
    <div className="py-0 lg:py-[100px] bg-black lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-[33px] font-bold text-white font-custom leading-[47px]">
          Our space
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[505px] text-base font-medium font-custom1 text-white">
        Nestled in the heart of Prishtina, our space is a dynamic workspace where creativity knows no bounds. <br /> <br />
        It's more than just a place to work—it's a vibrant hub where ideas come to life. From warm collaborative nooks to top-notch amenities, our space is designed to inspire innovation and foster collaboration.<br /> <br />
        Whether you're brainstorming with colleagues, hosting client meetings, or diving into focused work, our space provides the perfect environment to fuel your creativity and drive success.
        </span>
      </div>
    </div>
    <section className="w-full bg-black px-5 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-1 items-center gap-8 overflow-hidden">
      
      <ShuffleGrid />
    </section>
    </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: office1,
  },
  {
    id: 2,
    src: office2,
  },
  {
    id: 3,
    src: office3,
  },
  {
    id: 4,
    src: office2,
  },
  {
    id: 5,
    src: office3,
  },
  {
    id: 6,
    src: office1,
  },
  {
    id: 7,
    src: office3,
  },
  {
    id: 8,
    src: office1,
  },
  {
    id: 9,
    src: office2,
  },
  {
    id: 10,
    src: office3,
  },
  {
    id: 11,
    src: office1,
  },
  {
    id: 12,
    src: office3,
  },
  {
    id: 13,
    src: office2,
  },
  {
    id: 14,
    src: office1,
  },
  {
    id: 15,
    src: office2,
  },
  {
    id: 16,
    src: office3,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 2, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 5000);
  };

  return (
    <div className="lg:px-[20px] bg-black grid grid-cols-3 lg:grid-cols-4 grid-rows-3 h-screen gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;