import React from 'react';

const DestinationDescription = ({ currentDestination }) => {
  return (
    <div className="text-center tracking-wider pt-4">
      <h2 className="uppercase text-[28px] font-barlowCondensed flex flex-col">
        <span className="text-[14px] text-secondary font-bellefair">
          avg. distance
        </span>
        {currentDestination.distance}
      </h2>
      <h2 className="uppercase text-[28px] font-barlowCondensed">
        <span className="text-[14px] text-secondary font-bellefair">
          est. travel time
        </span>
        <br />
        {currentDestination.travel}
      </h2>
    </div>
  );
};

export default DestinationDescription;
