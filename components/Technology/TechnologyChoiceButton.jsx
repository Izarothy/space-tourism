import React from 'react';
import data from '../../data/data.json';
const technologyData = data.technology;
const TechnologyChoiceButton = ({
  number,
  technologyActive,
  setCurrentTechnology,
}) => {
  return (
    <button
      onClick={() => setCurrentTechnology(technologyData[number])}
      className={`${
        technologyActive
          ? `bg-white border-white text-main`
          : `bg-transparent border-white/25 `
      } rounded-full border font-bellefair p-4 py-2 lg:p-8 lg:py-6 lg:text-xl`}
    >
      {number + 1}
    </button>
  );
};

export default TechnologyChoiceButton;
