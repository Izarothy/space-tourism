import React from 'react';
import NavItem from './NavItem';
const NavMenu = ({ setMenuActive, menuActive }) => {
  return (
    <div
      className={`${
        menuActive ? `absolute md:hidden` : `hidden`
      } h-full w-full flex z-[100]`}
    >
      <button
        onClick={() => setMenuActive(false)}
        className="w-1/3 -mt-6 h-full bg-transparent"
      ></button>
      <div className="w-2/3 h-full flex flex-col gap-10 bg-white/5 backdrop-blur-[80px] p-8">
        <button className="self-end" onClick={() => setMenuActive(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col md:flex-row gap-4 ml-3 uppercase font-barlowCondensed tracking-wider items-start">
          <NavItem number="00" name="home" />
          <NavItem number="01" name="destination" />
          <NavItem number="02" name="crew" />
          <NavItem number="03" name="technology" />
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
