import React, { useState } from 'react';

const HeroButton = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`${
        hovered ? `md:bg-white/10` : `bg-transparent`
      } mx-auto mt-[80px] grid rounded-full w-[250px] h-[250px] `}
    >
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="m-auto focus:none outline-none bg-white h-[150px] w-[150px] rounded-full uppercase font-bellefair text-main tracking-wider text-lg"
      >
        Explore
      </button>
    </div>
  );
};

export default HeroButton;
