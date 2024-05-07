import React, { useState, useEffect } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

const ScrollText = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [1, 0], [-105, 750]);

    // Array of services
    const services = [
        {
            title: 'Brandind & Identity',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert.`
        },
        {
            title: 'Creative',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'Animation & 3D Modeling',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'UI & UX DESIGN',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        },
        {
            title: 'Web development',
            content: `Having understood your requirements we embark on a creative journey to develop design ideas. 
            We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. 
            This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert`
        }
    ];

    // State to keep track of current service index
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    // Function to handle next service
    const nextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
    };

    // Function to handle previous service
    const prevService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
    };

    // Automatically change services every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextService();
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentServiceIndex]);

    return (
        <>
            <div className='bg-black lg:py-[102px] overflow-hidden textTransition justify-center items-center mx-auto text-center'>
                <motion.h1 className='hidden lg:flex text-white font-custom text-4xl lg:text-[60px] 2xl:text-[95px]' style={{ x }}>We craft digital experiences</motion.h1>
                <h1 className='mt-12 flex lg:hidden text-white text-xl font-custom mx-auto justify-center text-center'>We craft digital experiences</h1>
            </div>

            {/* Display current service with smooth transitions */}
            <AnimatePresence wait>
                <div key={currentServiceIndex} className='text-white bg-black lg:h-[60vh] px-8 lg:px-[60px] py-[100px] flex flex-col lg:flex-row lg:justify-between'>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className='lg:w-1/2'>
                        <p className='font-custom text-[45px]'>{services[currentServiceIndex].title}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className='lg:w-1/2 py-5'>
                        <p className='font-custom1 lg:w-[520px] 2xl:w-[665px] lg:h-[342px] text-[16px]'>
                            {services[currentServiceIndex].content}
                        </p>
                    </motion.div>
                    <div className='lg:flex flex flex-row lg:flex-col gap-y-2 gap-x-2 lg:gap-x-0'>
                        <button className={`cursor-pointer lg:px-[2px] px-[20px] py-[2px] lg:py-4 ${currentServiceIndex === 0 ? 'bg-gray-500' : 'bg-white'}`} onClick={prevService}></button>
                        <button className={`cursor-pointer lg:px-[2px] px-[20px] py-[2px] lg:py-4 ${currentServiceIndex === 1 ? 'bg-gray-500' : 'bg-white'}`} onClick={nextService}></button>
                        <button className={`cursor-pointer lg:px-[2px] px-[20px] py-[2px] lg:py-4 ${currentServiceIndex === 2 ? 'bg-gray-500' : 'bg-white'}`} onClick={nextService}></button>
                        <button className={`cursor-pointer lg:px-[2px] px-[20px] py-[2px] lg:py-4 ${currentServiceIndex === 2 ? 'bg-gray-500' : 'bg-white'}`} onClick={nextService}></button>
                        <button className={`cursor-pointer lg:px-[2px] px-[20px] py-[2px] lg:py-4 ${currentServiceIndex === 2 ? 'bg-gray-500' : 'bg-white'}`} onClick={nextService}></button>

                    </div>
                </div>
            </AnimatePresence>
        </>
    );
};

export default ScrollText;
