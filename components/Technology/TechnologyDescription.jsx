import React from 'react';

const TechnologyDescription = ({ currentTechnology }) => {
  return (
    <div className="flex flex-col gap-4 lg:text-left lg:max-w-lg">
      <div className="uppercase">
        <span className="font-barlowCondensed text-[14px] tracking-wider text-secondary">
          The terminology...
        </span>
        <h2 className="font-bellefair text-2xl mt-2 tracking-wider md:text-[40px] md:my-4 lg:text-6xl">
          {currentTechnology.name}
        </h2>
      </div>
      <p className="font-barlowCondensed text-secondary leading-slug text-[18px]">
        {currentTechnology.description}
      </p>
    </div>
  );
};

export default TechnologyDescription;
