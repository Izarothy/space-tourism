import React from 'react';

const DestinationDescription = ({ currentDestination }) => {
  return (
    <div className="text-center tracking-wider pt-4 md:pt-7 md:flex md:justify-between md:px-[150px]">
      <h2 className="uppercase text-[28px] font-bellefair flex flex-col">
        <span className="text-[14px] text-secondary font-barlowCondensed">
          avg. distance
        </span>
        {currentDestination.distance}
      </h2>
      <h2 className="uppercase text-[28px] font-bellefair flex flex-col">
        <span className="text-[14px] text-secondary font-barlowCondensed">
          est. travel time
        </span>
        {currentDestination.travel}
      </h2>
    </div>
  );
};

export default DestinationDescription;
