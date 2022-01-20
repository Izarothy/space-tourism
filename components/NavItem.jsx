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
      <li className="text-sm sm:text-normal">
        <span className="font-bold text-1/2 ">{number}</span> {name}
      </li>
    </Link>
  );
};

export default NavItem;
