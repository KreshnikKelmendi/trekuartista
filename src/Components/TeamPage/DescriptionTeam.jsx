import React from 'react';

const DescriptionTeam = () => {
  return (
    <div className="py-0 md:py-[100px] bg-[#E6E6E6] lg:px-[50px]">
      <div className="flex flex-col lg:flex-row p-4 lg:p-0">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold font-custom leading-[47px]">
          Our people
        </h1>
        <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
          We like working together and performing professionally. <br /> <br />Our team includes experienced business strategists, communication specialists, graphic and web designers, 3D animators, drawing illustrators, and programmers, ensuring that our clients receive professionalism and polish.
        </span>
      </div>
    </div>
  );
};

export default DescriptionTeam;
