import React from 'react';
import { useParams } from 'react-router-dom';
import { ourWorks } from '../Components/Works/workData';

const SinglePageOfWork = () => {
  const { adsID } = useParams();
  const ad = ourWorks.find((ad) => ad.id == adsID);

  if (!ad) {
    return <div className='kontaktText justify-content-center align-items-center text-center'>SHPALLJA NUK U GJET</div>;
  }

  const { workName } = ad;
  return <div>{workName}</div>;
};

export default SinglePageOfWork;
