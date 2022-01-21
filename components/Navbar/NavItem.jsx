import React from 'react';
import Link from 'next/link';
const NavItem = ({ number, name, active }) => {
  return (
    <Link href={name === 'home' ? '/' : name}>
      <li
        className={`${
          active
            ? `md:border-b-[3px] border-white`
            : `md:hover:border-b-[3px] border-white/50`
        } cursor-pointer text-sm sm:text-normal md:pb-10`}
      >
        <span className="md:hidden font-bold text-1/2 ">{number}</span> {name}
      </li>
    </Link>
  );
};

export default NavItem;
