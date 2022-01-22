import React from 'react';
import NavItem from './NavItem';
import NavMenu from './NavMenu';
import Link from 'next/link';
const NavBar = ({ setMenuActive, menuActive, currentPage }) => {
  return (
    <nav className="flex justify-between w-full md:mb-[102px]">
      <NavMenu setMenuActive={setMenuActive} menuActive={menuActive} />
      <hr className="hidden lg:block absolute top-[88px] left-[167px] w-1/3 border-white/25 z-[999]" />
      <Link href="/">
        <div className="grid bg-white h-10 w-10 rounded-full items-center m-6 lg:mt-16 lg:ml-10">
          <svg
            width="1"
            height="1"
            className="w-10 h-10 cursor-pointer"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
              fill="#0B0D17"
            />
          </svg>
        </div>
      </Link>
      <ul className="hidden md:flex flex-row gap-4 ml-3 uppercase font-barlowCondensed tracking-wider md:pt-10 md:px-12 lg:mt-10 lg:justify-center lg:w-3/5 md:bg-white/5 backdrop-blur-[82px] md:tracking-widest z-[1]">
        <NavItem number="00" name="home" active={currentPage === 'Home'} />
        <NavItem
          number="01"
          name="destination"
          active={currentPage === 'Destination'}
        />
        <NavItem number="02" name="crew" active={currentPage === 'Crew'} />
        <NavItem
          number="03"
          name="technology"
          active={currentPage === 'Technology'}
        />
      </ul>
      <button
        className="p-6 md:hidden"
        onClick={() => {
          setMenuActive(!menuActive);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden h-10 w-10 text-secondary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
