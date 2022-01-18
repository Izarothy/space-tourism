import React from 'react';

const PlanetsBarItem = ({ name, setCurrentDestination, destinationActive }) => {
  return (
    <button
      onClick={() => setCurrentDestination(name)}
      className={`${
        destinationActive
          ? `md:border-b-[3px] border-white`
          : `md:hover:border-b-[3px] border-white/50`
      } text-secondary font-barlowCondensed tracking-wider cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default PlanetsBarItem;
