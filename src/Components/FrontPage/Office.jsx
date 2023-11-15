import React, { useEffect, useState } from 'react';
import office1 from "../Assets/office1.png";
import office2 from "../Assets/office2.png";
import office3 from "../Assets/office3.jpg";
import office4 from "../Assets/office4.jpg";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Office = () => {
    const [ref, inView] = useInView({ threshold: 0.9 });
    const [photoRef, photoInView] = useInView({  triggerOnce: true, // Only trigger the animation once
    threshold: 0.5 });

    const sliderImages = [office1, office2, office3, office4]; // Add more images as needed
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const next = (currentSlide + 1) % sliderImages.length;
        setCurrentSlide(next);
    };

    const prevSlide = () => {
        const prev = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
        setCurrentSlide(prev);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change the interval duration (in milliseconds) as needed

        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [currentSlide]);

    return (
        <div className="flex flex-col lg:flex-row md:px-[60px] mt-[129px]">
            {/* First Div */}
            <div className="w-full lg:w-1/2 flex flex-col px-3">
                <motion.div className="h-full"
                 ref={ref}
                 initial={{ opacity: 0, y: -50 }}
                 animate={inView && { opacity: 1, y: 0, transition: { duration: 0.5 } }}>
                    <h1 className="text-4xl md:text-5xl lg:text-[45px] font-bold font-custom leading-[47px]">Our Space</h1>
                    <p className="text-base py-[34px] font-custom1 text-[#979797] font-thin md:w-[425px]">
                        We see the gaps, trends, blind spots and white spaces. Those ‘right under your nose’ and ‘never thought about it like that’ game-changers.
                        <br /> <br /> We see the stories, angles and opportunities. The ways in. And the ways out.
                    </p>
                    <Link to="/contact" onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            })}>
                    <button className="w-[207px] text-black hover:bg-black transition duration-500 ease-in-out hover:text-white text-base border border-[#1E1E1E] font-custom1 py-2 px-4">
                        View more
                    </button>
                    </Link>
                </motion.div>
                <motion.img
                    src={office1}
                    alt="Our Space"
                    ref={photoRef}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView && { opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }} 
                    className="max-w-full mt-[41px] object-cover"
                />
            </div>

            {/* Second Div */}
        
            <div className="w-full lg:w-1/2 relative">
                {sliderImages.map((image, index) => (
                    <div
                        key={index}
                        className={`w-full h-full absolute transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                <div className="absolute bottom-5 left-[50px] transform -translate-x-1/2 flex space-x-2">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full bg-gray-400 focus:outline-none ${currentSlide === index ? 'bg-gray-800' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    
    );
};

export default Office;
