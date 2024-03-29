import React from 'react';
import data from '../../data/data.json';
const destinations = data.destinations;

const PlanetsBarItem = ({
  idx,
  name,
  setCurrentDestination,
  destinationActive,
}) => {
  return (
    <button
      onClick={() => setCurrentDestination(destinations[idx])}
      className={`${
        destinationActive
          ? `border-b-[3px] border-white`
          : `md:hover:border-b-[3px] border-white/50`
      } text-secondary font-barlowCondensed tracking-wider cursor-pointer uppercase md:pb-3`}
    >
      {name}
    </button>
  );
};

export default PlanetsBarItem;
