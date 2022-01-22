import React from 'react';

const CrewDescription = ({ currentCrew }) => {
  const { name, role, bio } = currentCrew;
  return (
    <div className="flex md:order-2 flex-col gap-2 font-bellefair max-w-xl">
      <span className="text-white/50 uppercase tracking-wider md:text-2xl">
        {role}
      </span>
      <h2 className="text-3xl uppercase md:text-[40px] lg:text-[56px] my-7 leading-[70px]">
        {name}
      </h2>
      <p className="text-secondary font-barlowCondensed mt-4 lg:text-[18px] lg:leading-[32px]">
        {bio}
      </p>
    </div>
  );
};

export default CrewDescription;
