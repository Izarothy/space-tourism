import React from 'react';

const Header = ({ number, desc, name }) => {
  return (
    <header
      className={`${
        number ? `flex-row gap-2` : `flex-col`
      } flex font-barlowCondensed md:mr-auto`}
    >
      {number && (
        <span className="text-secondary text-white/25 font-bold md:text-[20px]">
          {number}
        </span>
      )}
      <span className="text-secondary uppercase md:text-[20px]">{desc}</span>
      <h1
        className={`${
          number ? `md:text-[20px]` : `text-[80px] md:text-[150px]`
        } font-barlowCondensed uppercase tracking-wider text-gray-300`}
      >
        {name}
      </h1>
    </header>
  );
};

export default Header;
