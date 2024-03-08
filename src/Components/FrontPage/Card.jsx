'use client'
import { useRef } from 'react';
import styles from '../FrontPage/style.module.scss';
import { useTransform, useScroll, motion } from 'framer-motion';

const Card = ({title, description, workImage, url, color, i}) => {

    const container = useRef(null);

  const { scrollYProgress } = useScroll({

    target: container,

    offset: ['start end', 'start start']

  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1])

  return (
    <div ref={container} className={styles.cardContainer}>
      <div 
        className={styles.card}
        // style={{backgroundColor: color, top:`calc(-5vh + ${i * 25}px)`}}
      >
        

          <div className={styles.imageContainer}>
            <motion.div style={{scale: imageScale}} className={styles.inner}>
              <img
                className='w-full lg:h-[100vh] object-cover'
                src={workImage}
                alt="image" 
              />
            </motion.div>
            <div className='absolute top-1/2 px-5 lg:px-[50px]'>
                <p className='font-custom text-white text-4xl lg:text-[45px]'>{title}</p>
                <button className="mt-6 w-[207px] text-white hover:bg-black hover:text-white hover:scale-105 transition duration-500 ease-in-out hover:border-black text-base border border-white font-custom1 py-2 px-4">
                    Show More
                </button>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Card