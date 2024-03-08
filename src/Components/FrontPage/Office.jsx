import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import officeImage1 from "../Assets/firstOffice.png";
import officeImage2 from "../Assets/office5.png";

const carouselData = [
  {
    id: 1,
    image: officeImage1,
    title: 'The office 1',
    description: 'We uncover the hidden pathways, the shifting landscapes, the unnoticed opportunities, and the untouched canvases. Those "in plain sight" revolutions that will reshape your digital presence.',
  },
  {
    id: 2,
    image: officeImage2,
    title: 'The office 2',
    description: 'Another set of compelling content for the second office. Lorem ipsum dolor sit amet consectour adis consectour.',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Office = () => {
  return (
    <div className='w-full pt-[115px] bg-black'>
      <div className='relative'>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          pauseOnHover={false}
          showDots={true}
          arrows={false}
        >
          {carouselData.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt='' className='w-full h-[50vh] lg:h-[763px] object-cover' />
              <div className='absolute top-1/2 left-[5px] lg:left-[50px]'>
                <p className='font-custom lg:text-[45px] text-white'>{item.title}</p>
                <p className='lg:w-[514px] h-[62px] text-white mt-[24px]'>{item.description}</p>
                <button className='mt-12 w-[207px] text-white hover:bg-white transition duration-500 ease-linear hover:text-black text-base border border-white font-custom1 py-2 px-4'>
                  Show More
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Office;
