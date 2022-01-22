import React from 'react';
import DestinationChoiceButton from './DestinationChoiceButton';
import data from '../../data/data.json';

const DestinationDescription = ({
  currentDestination,
  setCurrentDestination,
}) => {
  return (
    <div className="text-center lg:text-left tracking-wider pt-4 md:pt-7 md:flex md:flex-col md:justify-between md:px-[150px] lg:px-[100px] xl:px-[200px] px-6 lg:w-1/2">
      <div className="flex justify-center lg:justify-start gap-7 mb-5">
        {data.destinations.map((destination, idx) => {
          return (
            <DestinationChoiceButton
              key={idx}
              idx={idx}
              name={destination.name}
              setCurrentDestination={setCurrentDestination}
              destinationActive={currentDestination === destination}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="uppercase text-[56px] md:text-[80px] font-bellefair">
          {currentDestination.name}
        </h2>
        <p className="text-secondary mb-8 font-barlowCondensed md:leading-[28px]">
          {currentDestination.description}
        </p>
      </div>
      <hr className="border-[#383B4B]" />
      <div className="flex flex-col md:flex-row md:justify-center lg:justify-start gap-8 pt-8">
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
    </div>
  );
};

export default DestinationDescription;
