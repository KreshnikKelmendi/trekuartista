import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import product1 from "../Assets/bardhi.png";
import product2 from "../Assets/ariani.png";
import product3 from "../Assets/alba.png";
import product4 from "../Assets/jetliri.png";

const products = [
  {
    id: 1,
    name: 'Bardh Krasniqi',
    description: 'CEO Founder',
    image: product1,
  },
  {
    id: 2,
    name: 'Arian Ahmeti',
    description: 'CEO Founder',
    image: product2,
  },
  {
    id: 3,
    name: 'Alba Krasniqi',
    description: 'Operation Manager',
    image: product3,
  },
  {
    id: 4,
    name: 'Jetlir Kuleta',
    description: 'Print Manager',
    image: product4,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'Description for Product 5',
    image: product4,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for Product 6',
    image: product4,
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Description for Product 7',
    image: product1,
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Description for Product 8',
    image: product2,
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Description for Product 9',
    image: product3,
  },
];

const TeamOnHomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(calculateSlidesPerPage());
  const [touchStartX, setTouchStartX] = useState(null);

  function calculateSlidesPerPage() {
    if (window.innerWidth < 768) {
      return 1;
    } else {
      return 4;
    }
  }

  const controls = useAnimation();

  const nextSlide = () => {
    const next = currentSlide + slidesPerPage;
    setCurrentSlide(next >= products.length ? 0 : next);
  };

  const prevSlide = () => {
    let prev = currentSlide - slidesPerPage;
    if (prev < 0) {
      prev = products.length - (products.length % slidesPerPage);
      if (prev === products.length) {
        prev = products.length - slidesPerPage;
      }
    }
    setCurrentSlide(prev);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    // Adjust the sensitivity according to your preference
    if (deltaX > 50) {
      prevSlide();
      setTouchStartX(null);
    } else if (deltaX < -50) {
      nextSlide();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      className="py-0 md:py-4 lg:px-[50px]"
      onTouchStart={isMobile ? handleTouchStart : null}
      onTouchMove={isMobile ? handleTouchMove : null}
      onTouchEnd={isMobile ? handleTouchEnd : null}
    >
      <div className="px-4 flex mt-[143px] items-center justify-between">
        <h1 className="flex text-4xl md:text-5xl lg:text-[45px] font-bold font-custom leading-[47px]">
          Our people
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='ml-6 mt-3'
          >
            <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A"/>
            </svg>

          </motion.div>
        </h1>

        <div className="flex cursor-pointer">
          <svg
            onClick={prevSlide}
            width="20"
            height="20"
            viewBox="0 0 31 32"
            fill={isMobile ? '#1E1E1E' : 'black'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.3755 31.6064L15.3611 28.3108L15.3446 24.6863L15.3399 21.8635L15.3251 17.4511L15.3078 12.655L15.2951 8.5852L15.281 5.33069L15.2709 2.70653L15.2603 0.000157L1.71837e-05 15.7439L15.3755 31.6064Z" />
          </svg>
          <svg
            onClick={nextSlide}
            width="20"
            height="20"
            viewBox="0 0 31 32"
            fill={isMobile ? '#1E1E1E' : 'black'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.2603 0L15.2746 3.29562L15.2911 6.92012L15.2958 9.74293L15.3107 14.1553L15.328 18.9514L15.3406 23.0212L15.3547 26.2758L15.3648 28.8999L15.3755 31.6063L30.6357 15.8626L15.2603 0Z" />
          </svg>
        </div>
      </div>

      <div className="flex overflow-hidden px-3">
        {products.slice(currentSlide, currentSlide + slidesPerPage).map((product, index) => (
          <motion.div
            key={product.id}
            className={`w-full ${isMobile ? 'md:w-full lg:w-full' : 'md:w-1/2 lg:w-1/3'} mt-[29px] px-1 justify-center text-[#979797] text-[18px]`}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <div className="rounded-lg">
              <motion.img
                src={product.image}
                alt={product.name}
                className={`w-full h-[50vh] md:h-[70vh] object-cover cursor-pointer latest-image ${
                  index === 0 ? 'active-slide' : ''
                }`}
                whileHover={{ scaleX: 1.04, scaleY: 1.03, transition: {duration:0.3} }} // Add this line for the hover effect
              />
              <h2 className="font-custom1 font-bold mt-2">{product.name}</h2>
              <p className='font-custom1'>{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamOnHomePage;
