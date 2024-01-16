import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ourWorks } from './workData';
import soundOffIcon from "../Assets/off.png";
import soundOnIcon from "../Assets/on.png";

const OurWorks = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [selectedWork, setSelectedWork] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const isClearAllVisible = selectedWork !== '' || selectedCategory !== '' || searchQuery !== "";

  const toggleMute = (event) => {
    event.stopPropagation();
    setIsMuted((prevMuted) => !prevMuted);
  };

  const handleSelectChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const handleClearAll = () => {
    setSelectedWork('');
    setSelectedCategory('');
    setSearchQuery('');
  };

  const handleSearchInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchInputBlur = () => {
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (clientName) => {
    setSearchQuery(clientName);
    setShowSuggestions(false);
  };

  const clientSuggestions = ourWorks
    .map((work) => work.workName)
    .filter((clientName) =>
      clientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const filteredWorks = ourWorks.filter(
    (work) =>
      (selectedWork ? work.workName === selectedWork : true) &&
      (selectedCategory ? work.category === selectedCategory : true) &&
      (searchQuery
        ? work.workName.toLowerCase().includes(searchQuery.toLowerCase())
        : true)
  );

  return (
    <>
      <div className='px-5 lg:px-[50px] mt-8'>
        <hr className="w-full block mb-4 border-t-1 border-black" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center mb-4 px-5 lg:px-[50px] mt-6">
        {/* CLIENT dropdown */}
        <select
          id="workSelector"
          name="workSelector"
          onChange={(event) => handleSelectChange(event, setSelectedWork)}
          value={selectedWork}
          className="lg:mr-[23px] p-2 h-10 lg:h-fit font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%] rounded-none"
        >
          <option value="">CLIENT</option>
          <option value=""></option>
          {ourWorks.map((work) => (
            <option key={work.id} value={work.workName}>
              {work.workName}
            </option>
          ))}
        </select>
        {/* CATEGORY dropdown */}
        <select
          id="categorySelector"
          name="categorySelector"
          onChange={(event) => handleSelectChange(event, setSelectedCategory)}
          value={selectedCategory}
          className="p-2 h-10 lg:h-fit font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%] mt-4 lg:mt-0 rounded-none"
        >
          <option value="">CATEGORY</option>
          <option value=""></option>
          {ourWorks
            .reduce((categories, work) => {
              if (!categories.includes(work.category)) {
                categories.push(work.category);
              }
              return categories;
            }, [])
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>

          {/* Clear All button */}
          {isClearAllVisible && (
          <motion.button
            onClick={handleClearAll}
            className="p-2 ml-4 text-black font-custom1 cursor-pointer hidden lg:block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Clear all
          </motion.button>
        )}
        {/* Search input for clients with suggestions */}
        <div className="relative w-full lg:w-[23.5%] mt-4 lg:mt-0">
          <input
            type="text"
            placeholder="Search by client name"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onFocus={handleSearchInputFocus}
            onBlur={handleSearchInputBlur}
            className="p-2 px-2 font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer lg:mt-0 w-full lg:mx-[23px] rounded-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 absolute right-[4px] lg:right-[-15px] top-3" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="#DF319A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {showSuggestions && (
            <ul className="absolute z-10 w-full bg-white">
              {clientSuggestions.map((clientName) => (
                <li
                  key={clientName}
                  className="p-2 cursor-pointer"
                  onClick={() => handleSuggestionClick(clientName)}
                >
                  {clientName}
                </li>
              ))}
            </ul>
          )}
          
        {/* Clear all for mobile devices */}
        {isClearAllVisible && (
          <motion.button
            onClick={handleClearAll}
            className="p-2 text-red-600 font-custom1 cursor-pointer lg:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Clear all
          </motion.button>
        )}
        </div>
      
      </div>
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
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
      <AnimatePresence>
        <div className="px-5 lg:px-[50px] mt-5">
          {filteredWorks.slice(2, 3).map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className='relative'
            >
              <button onClick={(event) => toggleMute(event)} className="absolute top-2 right-2 z-50 p-2 rounded-full">
              {isMuted ? (
          <img
            src={soundOffIcon}
            alt="Sound Off"
            className="w-5 h-5"
          />
        ) : (
          <img
            src={soundOnIcon}
            alt="Sound On"
            className="w-5 h-5"
          />
        )}
        </button>
              <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <motion.video
                  src={work.workImage}
                  muted={isMuted}
                  loop
                  playsInline
                  autoPlay
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
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[25px] mt-[49px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
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



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ourWorks } from './workData';
// import soundOffIcon from "../Assets/off.png";
// import soundOnIcon from "../Assets/on.png";
// import FetchData from '../hooks/FetchData';

// const OurWorks = () => {
//   const [isMuted, setIsMuted] = useState(true);
//   const [selectedClient, setSelectedClient] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [searchClient, setSearchClient] = useState('');
//   const [showDropdown, setShowDropdown] = useState(false);

//   const apiUrl = "http://localhost:1337";
//   const { loading, error, data } = FetchData(`${apiUrl}/api/works?populate=*`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   const uniqueClients = Array.from(new Set(data?.data
//     ?.filter(work => searchClient === '' || work?.attributes?.clientName.toLowerCase().includes(searchClient.toLowerCase()))
//     ?.map(work => work?.attributes?.clientName)
//   ));
//   const uniqueCategories = Array.from(new Set(data?.data?.map(work => work.attributes.category)));

//   const filteredData = data?.data?.filter(work =>
//     (searchClient === '' || work?.attributes?.clientName.toLowerCase().includes(searchClient.toLowerCase())) &&
//     (selectedClient === '' || work?.attributes?.clientName === selectedClient) &&
//     (selectedCategory === '' || work?.attributes?.category === selectedCategory)
//   );

//   const toggleMute = (event) => {
//     event.stopPropagation();
//     setIsMuted((prevMuted) => !prevMuted);
//   };

//   return (
//     <>
//       <div className='px-5 lg:px-[50px] mt-8'>
//         <hr className="w-full block mb-4 border-t-1 border-black" />
//       </div>
//       <div className="flex flex-col lg:flex-row justify-center items-center mb-4 px-5 lg:px-[50px] mt-6">
//         <select
//           id="clientFilter"
//           value={selectedClient}
//           onChange={(e) => setSelectedClient(e.target.value)}
//           className="lg:mr-[23px] p-2 h-10 lg:h-fit font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%] rounded-none"
//         >
//           <option value="">Client</option>
//           <option value=""></option>
//           {uniqueClients?.map(client => (
//             <option key={client} value={client}>{client}</option>
//           ))}
//         </select>
//         <select
//           id="categoryFilter"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 h-10 lg:h-fit font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer w-[100%] lg:w-[23.5%] mt-4 lg:mt-0 rounded-none"
//         >
//           <option value="">Category</option>
//           <option value=""></option>
//           {uniqueCategories?.map(category => (
//             <option key={category} value={category}>{category}</option>
//           ))}
//         </select>
//         <div className="relative w-full lg:w-[23.5%] mt-4 lg:mt-0">
//         <input
//           type="text"
//           placeholder="Search by Client Name"
//           value={searchClient}
//           onChange={(e) => setSearchClient(e.target.value)}
//           onClick={() => setShowDropdown(true)}
//           onBlur={() => setShowDropdown(false)}
//           className="p-2 px-2 font-custom1 uppercase border border-black bg-[#F8F8F8] cursor-pointer lg:mt-0 w-full lg:mx-[23px] rounded-none"
//         />
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 absolute right-[4px] lg:right-[-15px] top-3" 
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="#DF319A"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>

//         {showDropdown && (
//         <ul className="absolute lg:left-6 z-10 w-full bg-[#F8F8F8]">
//           {uniqueClients?.map(client => (
//             <li key={client} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => {
//               setSelectedClient(client);
//               setSearchClient(client);
//               setShowDropdown(false);
//             }}>
//               {client}
//             </li>
//           ))}
//         </ul>
//       )}
//           </div>
//       </div>

//       <AnimatePresence>
//         <div className="grid grid-cols-1 md:grid-cols-2 py-[25px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
//           {filteredData?.slice(0, 2).map((work) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                 {work?.attributes?.image?.data?.attributes?.url?.endsWith('.mp4') ? (
//                   <motion.video className="w-full h-[40vh] lg:h-[504px] object-cover" autoPlay loop muted>
//                     <source src={`${apiUrl}${work?.attributes?.image?.data?.attributes?.url}`} type="video/mp4" />
//                   </motion.video>
//                 ) : (
//                   <motion.img
//                     src={`${apiUrl}${work?.attributes?.image?.data?.attributes?.url}`}
//                     alt=""
//                     whileTap={{ scale: 0.9 }}
//                     className='w-full h-[40vh] lg:h-[504px] object-cover'
//                   />
//                 )}
//                 <motion.p
//                   className="mt-2 lg:mt-[30px] font-custom2 font-extrabold text-[22px]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.clientName}
//                 </motion.p>
//                 <motion.p
//                   className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.descriptionCategory}
//                 </motion.p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </AnimatePresence>

//       <AnimatePresence>
//         <div className="px-5 lg:px-[50px] mt-5">
//           {filteredData?.slice(2, 3).map((work) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className='relative'
//             >
//               <button onClick={(event) => toggleMute(event)} className="absolute top-2 right-2 z-50 p-2 rounded-full">
//                 {isMuted ? (
//                   <img
//                     src={soundOffIcon}
//                     alt="Sound Off"
//                     className="w-5 h-5"
//                   />
//                 ) : (
//                   <img
//                     src={soundOnIcon}
//                     alt="Sound On"
//                     className="w-5 h-5"
//                   />
//                 )}
//               </button>
//               <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                 <motion.video
//                   src={`${apiUrl}${work?.attributes?.image?.data?.attributes?.url}`}
//                   muted={isMuted}
//                   loop
//                   playsInline
//                   autoPlay
//                   alt=""
//                   className="h-[40vh] lg:h-[391px] 2xl:h-[450px] w-full object-cover"
//                 />

//                 <motion.p
//                   className="mt-2 lg:mt-[30px] flex font-custom2 font-extrabold text-[22px]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.clientName}
//                   <motion.div
//                     initial={{ scale: 1 }}
//                     animate={{ scale: [1, 1.3, 1] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                     className="ml-3"
//                   >
//                     <svg width="39" height="33" viewBox="0 0 39 33" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M38.9946 13.5843L39 13.5789H38.9903L25.406 0.0258216L19.5163 5.84967L13.6525 0L0 13.4982C6.55272 19.9988 13.1054 26.4994 19.6592 33L38.9924 13.5865H38.9967L38.9946 13.5843Z" fill="#DF319A" />
//                     </svg>
//                   </motion.div>
//                 </motion.p>
//                 <motion.p
//                   className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.descriptionCategory}
//                 </motion.p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </AnimatePresence>

//       <AnimatePresence>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[25px] mt-2 lg:mt-[49px] px-5 lg:px-[50px] gap-x-[23px] gap-y-7 lg:gap-y-0">
//           {filteredData.slice(3).map((work) => (
//             <motion.div
//               key={work.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
//                 <motion.img
//                   src={`${apiUrl}${work?.attributes?.image?.data?.attributes?.url}`}
//                   alt=""
//                   whileTap={{ scale: 0.9 }}
//                   className='h-[330px] object-cover'
//                 />
//                 <motion.p
//                   className="mt-2 lg:mt-[30px] font-custom2 font-extrabold text-[22px]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.clientName}
//                 </motion.p>
//                 <motion.p
//                   className="w-full lg:w-[403px] font-custom1 font-medium text-[#979797]"
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   {work?.attributes?.descriptionCategory}
//                 </motion.p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </AnimatePresence>
//     </>
//   );
// };

// export default OurWorks;
