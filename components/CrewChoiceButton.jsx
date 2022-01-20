import React from 'react';
import data from '../data/data.json';
const crewData = data.crew;

const CrewChoiceButton = ({ idx, crewButtonActive, setCurrentCrew }) => {
  return (
    <button
      className={`${
        crewButtonActive ? `bg-white` : `bg-white/20`
      } h-[10px] w-[10px] rounded-full`}
      onClick={() => {
        setCurrentCrew(crewData[idx]);
      }}
    />
  );
};

export default CrewChoiceButton;
