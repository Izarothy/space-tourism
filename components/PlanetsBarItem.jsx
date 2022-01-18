import React from 'react';

const PlanetsBarItem = ({ name, setCurrentDestination, destinationActive }) => {
  return (
    <button
      onClick={() => setCurrentDestination(name)}
      className={`${
        destinationActive
          ? `border-b-[3px] border-white`
          : `md:hover:border-b-[3px] border-white/50`
      } text-secondary font-barlowCondensed tracking-wider cursor-pointer uppercase`}
    >
      {name}
    </button>
  );
};

export default PlanetsBarItem;
