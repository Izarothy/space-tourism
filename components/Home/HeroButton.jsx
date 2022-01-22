import React, { useState } from 'react';

const HeroButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="xl:self-end flex justify-center xl:ml-auto xl:pr-[170px]">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${
          hovered ? `bg-white/20` : `bg-white`
        } m-auto focus:none outline-none h-[150px] w-[150px] md:h-[242px] md:w-[242px] xl:h-[274px] xl:w-[274px] rounded-full uppercase font-bellefair text-main tracking-wider text-lg md:text-[32px]`}
      >
        Explore
      </button>
    </div>
  );
};

export default HeroButton;
