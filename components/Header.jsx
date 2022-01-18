import React from 'react';

const Header = ({ number, name }) => {
  return (
    <header className="flex font-barlowCondensed gap-4">
      <span className="text-white/25 font-bold">{number}</span>
      <h1 className="uppercase tracking-wider text-gray-300">{name}</h1>
    </header>
  );
};

export default Header;
