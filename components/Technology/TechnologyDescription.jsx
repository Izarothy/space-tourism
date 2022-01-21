import React from 'react';

const TechnologyDescription = ({ currentTechnology }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="uppercase">
        <span className="font-barlowCondensed text-[14px] tracking-wider text-secondary">
          The terminology...
        </span>
        <h2 className="font-bellefair text-2xl mt-2 tracking-wider">
          {currentTechnology.name}
        </h2>
      </div>
      <p className="font-barlowCondensed text-secondary text-justify">
        {currentTechnology.description}
      </p>
    </div>
  );
};

export default TechnologyDescription;
