import React from 'react';
import Link from 'next/link';
const NavItem = ({ number, name, active }) => {
  return (
    <Link
      href={name === 'home' ? '/' : name}
      className={`${
        active
          ? `md:border-b-[3px] border-white`
          : `md:hover:border-b-[3px] border-white/50`
      } cursor-pointer`}
    >
      <li>
        <span className="font-bold">{number}</span> {name}
      </li>
    </Link>
  );
};

export default NavItem;
