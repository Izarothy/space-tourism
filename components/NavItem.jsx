import React from 'react';
import Link from 'next/link';
const NavItem = ({ number, name, active }) => {
  return (
    <Link href={name === 'home' ? '/' : name}>
      <a
        href=""
        className={`${
          active
            ? `md:border-b-[3px] border-white`
            : `md:hover:border-b-[3px] border-white/50`
        }`}
      >
        <li>
          <span className="font-bold">{number}</span> {name}
        </li>
      </a>
    </Link>
  );
};

export default NavItem;
