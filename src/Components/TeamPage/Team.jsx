import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamMembers } from './teamMembers';
import { FaLinkedin } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const TeamMember = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const delay = index * 0.15;

  return (
    <LazyLoad height='100%'>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="text-white justify-center p-2 lg:p-0 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src={isHovered ? member.hoverImage : member.image}
          alt={member.name}
          className="w-full h-[58vh] lg:h-[82vh] object-cover"
          whileHover={{ scale: isHovered ? 1.019 : 1 }} 
          transition={{ duration: 0.9, ease: "easeIn" }} 
        />
        <div className='absolute bottom-4 left-4'>
          <h2 className="text-lg font-custom1 mt-2 font-bold">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
        {isHovered && (
          <motion.div
            className='absolute bottom-4 right-4'
            initial="hidden"
            animate="visible"
            variants={iconVariants}
            transition={{ duration: 0.5 }}
          >
            {member.linkedinLink && (
              <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
          </motion.div>
        )}
      </motion.div>
    </LazyLoad>
  );
};

const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] pb-10 gap-y-[0px] lg:gap-y-[20px] lg:px-[50px] bg-black">
      {teamMembers.map((member, index) => (
        <TeamMember key={member.id} member={member} index={index} />
      ))}
    </div>
  );
};

export default Team;







// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import FetchData from '../hooks/FetchData';

// const ImageWithAnimation = ({ member, index }) => {
//   const apiUrl = "https://trekuartista-cms-as46r.ondigitalocean.app";
//   const [hoveredMember, setHoveredMember] = useState(null);
//   const [ref, inView] = useInView({ triggerOnce: true });

//   const variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const delay = index * 0.2; // Adjust the delay as needed

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       variants={variants}
//       transition={{ delay, ease:"easeOut" }}
//       onMouseEnter={() => setHoveredMember(member.id)}
//       onMouseLeave={() => setHoveredMember(null)}
//       className="text-[#979797] justify-center p-2 lg:p-0"
//     >
//       <img
//         src={`${apiUrl}${hoveredMember === member.id ? member?.attributes?.hoverImage?.data?.attributes?.url : member?.attributes?.image?.data[0]?.attributes?.url}`}
//         alt={member.name}
//         className="w-full h-full object-cover"
//       />
//       <h2 className="text-lg font-custom1 font-semibold mt-2">{member?.attributes?.fullName}</h2>
//       <p className="text-base font-custom1">{member?.attributes?.role}</p>
//     </motion.div>
//   );
// };

// const Team = () => {
//   const apiUrl = "https://trekuartista-cms-as46r.ondigitalocean.app";

//   let { loading, error, data } = FetchData(`${apiUrl}/api/teams?populate=*`);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error...</p>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-20 lg:gap-y-[108px] lg:px-[60px] py-[39px]">
//       {data?.data?.map((member, index) => (
//         <ImageWithAnimation key={member.id} member={member} index={index} />
//       ))}
//     </div>
//   );
// };

// export default Team;





// import React, { useEffect, useState } from 'react';
// import { teamMembers } from './teamMembers';
// import { fetchDataFromApi } from '../utils/api';


// const Team = () => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetchDataFromApi('/api/stafs?populate=*');
//       setData(response);

//     } catch (error) {
//       console.error('Error fetching data:', error);

//     }
//   };
//   console.log(data)

 

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-20 lg:gap-y-[108px] lg:px-[60px] py-[39px]">
//       {data?.data?.map((member) => (
//         <div
//           key={member.id}
//           className="text-[#979797] justify-center px-3 lg:p-0"
//         >
//           <img
//             src={member?.attributes?.photo?.data[0]?.attributes?.url}
//             alt={member?.attributes?.name}
//             className="w-full h-full object-cover"
            
//           />
//           <h2 className="text-lg font-custom1 font-semibold mt-2">{member?.attributes?.name}</h2>
//           <p className="text-base font-custom1">{member.attributes?.role}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Team;
