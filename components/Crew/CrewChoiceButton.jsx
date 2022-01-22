import React from 'react';
import data from '../../data/data.json';
const crewData = data.crew;

const CrewChoiceButton = ({ number, crewButtonActive, setCurrentCrew }) => {
  return (
    <button
      className={`${
        crewButtonActive ? `bg-white` : `bg-white/20`
      } h-[10px] w-[10px] lg:h-[15px] lg:w-[15px] rounded-full`}
      onClick={() => {
        setCurrentCrew(crewData[number]);
      }}
    />
  );
};

export default CrewChoiceButton;
