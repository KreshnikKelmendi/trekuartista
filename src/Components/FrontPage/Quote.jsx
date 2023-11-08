import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  const quotes = [
    {
      text: "We believe that the unbelievable can be reached, and we strive toward it by doing it again and again.",
      author: "Arian Ahmeti",
      role: "Art Director of Trekuartista",
    },
    {
      text: "Motivation is the catalyzing ingredient for every successful innovation.",
      author: "Bardh Krasniqi",
      role: "CEO of Trekuartista",
    },
    // {
    //   text: "Simplicity is the most complicated thing.",
    //   author: "Endrit Morina",
    //   role: "Team Leader / 3D Artist",
    // }
  
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next quote index (loop back to the first quote if the end is reached)
      const nextIndex = (currentQuoteIndex + 1) % quotes.length;
      setCurrentQuoteIndex(nextIndex);
    }, 5000); // Change the interval duration (in milliseconds) as needed

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentQuoteIndex, quotes.length]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <motion.div
      className="bg-black h-[481px] p-4 text-white md:px-8 lg:px-[176px] flex flex-col justify-center items-center mt-20 lg:mx-[65px]"
      initial={{ opacity: 0.5, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-2xl md:text-3xl lg:text-5xl font-bold font-custom leading-normal"
        key={currentQuote.text}
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        {currentQuote.text}
      </motion.h1>
      <div className='mt-4 md:mt-6 lg:mt-[60px] text-[#C0BBBB]'>
        <p className='text-base md:text-lg lg:text-xs font-custom1'>{currentQuote.author}</p>
        <p className='text-base md:text-lg lg:text-xs font-custom1'>{currentQuote.role}</p>
      </div>
    </motion.div>
  );
};

export default Quote;
