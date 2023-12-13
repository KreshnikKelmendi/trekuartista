import React, { useState } from 'react';
import { teamMembers } from './teamMembers';

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-20 lg:gap-y-[108px] lg:px-[60px] py-[39px]">
      {teamMembers?.map((member) => (
        <div 
            onMouseEnter={() => setHoveredMember(member.id)}
            onMouseLeave={() => setHoveredMember(null)} key={member.id} className="text-[#979797] justify-center p-2 lg:p-0">
          <img
            src={hoveredMember === member.id ? member.hoverImage : member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <h2 className="text-lg font-custom1 font-semibold mt-2">{member.name}</h2>
          <p className="text-base font-custom1">{member.position}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;


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
