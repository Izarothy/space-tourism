import React from 'react';

const Header = ({ number, desc, name }) => {
  return (
    <header
      className={`${
        number ? `flex-row gap-2` : `flex-col`
      } flex font-barlowCondensed`}
    >
      {number && (
        <span className="text-secondary text-white/25 font-bold">{number}</span>
      )}
      <span className="text-secondary uppercase md:text-[20px]">{desc}</span>
      <h1
        className={`${
          number ? ` ` : `text-[80px] md:text-[150px]`
        } font-bellefair uppercase tracking-wider text-gray-300`}
      >
        {name}
      </h1>
    </header>
  );
};

export default Header;
