import React from 'react';
import prishtinaHeatSave from "../Assets/prishtinaHeatSave.png";
import sap from "../Assets/sap.png";
import unicef from "../Assets/unicef.png";
import zone from "../Assets/zone.png";
import dokutech from "../Assets/dokutech.png";
import floil from "../Assets/floil.png";
import doni from "../Assets/doni.png";

const partnerLogos = [
  { src: prishtinaHeatSave, alt: "Partner 1" },
  { src: sap, alt: "Partner 2" },
  { src: unicef, alt: "Partner 3" },
  { src: sap, alt: "Partner 4" },
  { src: sap, alt: "Partner 5" },
  { src: zone, alt: "Partner 6" },
  { src: sap, alt: "Partner 7" },
  { src: unicef, alt: "Partner 8" },
  { src: zone, alt: "Partner 9" },
  { src: prishtinaHeatSave, alt: "Partner 10" },
  { src: floil, alt: "partner 11" },
  { src: dokutech, alt: "partner 12" },
  { src: doni, alt: "partner 13" },
  { src: dokutech, alt: "partner 14" },
  { src: floil, alt: "partner 15" }
];

const ClientsOnAbout = () => {
  return (
    <>
      <div className="py-0 lg:py-[100px] bg-[#E6E6E6] lg:px-[70px]">
        <div className="flex flex-col lg:flex-row p-4 lg:p-0">
          <h1 className="text-4xl lg:text-[33px] font-bold font-custom leading-[47px]">
            CLIENTS
          </h1>
          <span className="ml-0 lg:ml-[37px] mt-[33px] lg:mt-0 w-full lg:w-[425px] text-lg font-medium font-custom1 text-[#1E1E1E]">
            Our client success is our top priority, and we're here to transform their business into captivating realities.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-[93px] gap-x-14 py-5 lg:gap-y-[110px] gap-y-16 px-16 lg:px-[90px] lg:py-[84px]">
        {partnerLogos.map((logo, index) => (
          <div key={index}>
            <img className='w-[128px] h-[43px] object-contain' src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientsOnAbout;
