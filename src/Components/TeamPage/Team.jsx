import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { teamMembers } from './teamMembers';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


const TeamMember = ({ member, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const delay = index * 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay }}
      className="text-white justify-center p-2 lg:p-0"
    
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-[60vh] lg:h-full object-cover"
      />
      <div className='flex justify-between items-center'>
        <div className=''>
          <h2 className="text-lg font-custom1 font-semibold mt-2">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
        <div className='flex gap-x-[10px]'>
            {member.instagramLink && (
                <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
            )}
              {member.linkedinLink && (
                <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
            )}
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-20 lg:gap-y-[108px] lg:px-[50px] bg-black">
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
//   const apiUrl = "http://localhost:1337";
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
//   const apiUrl = "http://localhost:1337";

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
