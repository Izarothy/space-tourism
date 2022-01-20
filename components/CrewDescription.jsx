import React from 'react';

const CrewDescription = ({ currentCrew }) => {
  const { name, role, bio } = currentCrew;
  return (
    <div className="flex flex-col gap-2 font-bellefair">
      <span className="text-white/50 uppercase tracking-wider">{role}</span>
      <h2 className="text-3xl uppercase">{name}</h2>
      <p className="text-secondary font-barlowCondensed mt-4">{bio}</p>
    </div>
  );
};

export default CrewDescription;
