import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const DescriptionTeam = () => {
  const text =
    'We like working together and performing professionally. Our team includes experienced business strategists, communication specialists, graphic and web designers, 3D animators, drawing illustrators, and programmers, ensuring that our clients receive professionalism and polish.'.split(
      ' '
    );

  const svgVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const pathVariants = {
    hidden: { pathLength: 0, pathOffset: 1 },
    visible: { pathLength: 1, pathOffset: 0, transition: { duration: 3, ease: 'easeInOut' } },
  };

  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start('visible');
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="py-8 flex flex-col lg:flex-row px-5 bg-black lg:py-[70px] lg:px-[50px]">
      <motion.div className="w-full lg:w-1/2">
        <p className='text-[25px] lg:text-[45px] font-custom text-white'>Our people</p>
        {text.map((el, i) => (
          <motion.span
            className='ml-0 mt-[40px] lg:mt-0 w-full text-lg font-custom1 text-white '
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 11,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default DescriptionTeam;
