import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ourWorks } from './workData';

const OurWorks = () => {
  const [selectedWork, setSelectedWork] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const isClearAllVisible = selectedWork !== '' || selectedCategory !== '';

  const handleSelectChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleClearAll = () => {
    setSelectedWork('');
    setSelectedCategory('');
  };

  const filteredWorks = ourWorks.filter(
    (work) =>
      (selectedWork ? work.workName === selectedWork : true) &&
      (selectedCategory ? work.category === selectedCategory : true)
  );

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4 px-5 lg:px-[50px] mt-8">
        <select
          id="workSelector"
          name="workSelector"
          onChange={(event) => handleSelectChange(event, setSelectedWork)}
          value={selectedWork}
          className="lg:mr-[23px] p-2 font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%]"
        >
          <option value="">CLIENT</option>
          <option value=""></option>
          {ourWorks.map((work) => (
            <option key={work.id} value={work.workName}>
              {work.workName}
            </option>
          ))}
        </select>

        {/* Dropdown for selecting the Category of works */}
        <select
          id="categorySelector"
          name="categorySelector"
          onChange={(event) => handleSelectChange(event, setSelectedCategory)}
          value={selectedCategory}
          className="p-2 font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%] mt-4 lg:mt-0"
        >
          <option value="">CATEGORY</option>
          <option value=""></option>
          {ourWorks.reduce((categories, work) => {
            if (!categories.includes(work.category)) {
              categories.push(work.category);
            }
            return categories;
          }, []).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Clear All button */}
        {isClearAllVisible && (
          <motion.button
            onClick={handleClearAll}
            className="p-2 ml-4 text-black font-custom1 rounded cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Clear all
          </motion.button>
        )}
      </div>

      {/* Display works based on the selected title and category */}
      <AnimatePresence>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
          {filteredWorks.slice(0, 2).map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <motion.img
                  src={work.workImage}
                  alt=""
                  whileTap={{ scale: 0.9 }}
                />
                <motion.p
                  className="mt-[30px] font-custom2 font-extrabold text-[22px]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workName}
                </motion.p>
                <motion.p
                  className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workDescription}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Video and information section */}
      <AnimatePresence>
        <div className="px-5 lg:px-[50px] mt-5">
          {filteredWorks.slice(2, 3).map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <motion.video
                  src={work.workImage}
                  muted
                  loop
                  playsInline
                  autoPlay
                  controls
                  alt=""
                  className="h-[50vh] lg:h-[391px] 2xl:h-[450px] w-full object-cover"
                
                />
                <motion.p
                  className="mt-[30px] flex font-custom2 font-extrabold text-[22px]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workName}
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-3"
                  >
                    <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A" />
                    </svg>
                  </motion.div>
                </motion.p>
                <motion.p
                  className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workDescription}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>

      {/* Display remaining works based on the selected title and category */}
      <AnimatePresence>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-[25px] mt-[49px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
          {filteredWorks.slice(3).map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <motion.img
                  src={work.workImage}
                  alt=""
                  whileTap={{ scale: 0.9 }}
                />
                <motion.p
                  className="mt-[30px] font-custom2 font-extrabold text-[22px]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workName}
                </motion.p>
                <motion.p
                  className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
                  whileTap={{ scale: 0.9 }}
                >
                  {work.workDescription}
                </motion.p>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

export default OurWorks;
