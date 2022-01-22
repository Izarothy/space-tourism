import React from 'react';

const Header = ({ number, desc, name, leftPad }) => {
  return (
    <header
      className={`${number ? `flex-row gap-2` : `flex-col`} ${
        leftPad && `md:pl-9 lg:pl-[155px]`
      } flex font-barlowCondensed md:mr-auto md:mb-12 lg:mb-0`}
    >
      {number && (
        <span className="text-secondary text-white/25 font-bold md:text-[20px] lg:text-[28px]">
          {number}
        </span>
      )}
      <span className="text-secondary uppercase md:text-[20px] lg:text-[28px]">
        {desc}
      </span>
      <h1
        className={`${
          number
            ? `md:text-[20px] lg:text-[28px]`
            : `text-[80px] md:text-[150px]`
        } font-barlowCondensed uppercase tracking-wider text-gray-300`}
      >
        {name}
      </h1>
    </header>
  );
};

export default Header;
