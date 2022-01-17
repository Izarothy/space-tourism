import React from 'react';
const NavMenu = ({ setMenuActive, menuActive }) => {
  return (
    <div
      className={`${
        menuActive ? `absolute` : `hidden`
      } h-full flex flex-col gap-10 bg-white/5 backdrop-blur-[80px] w-2/3 right-0 -mt-6 p-8`}
    >
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
      <ul className="flex flex-col md:flex-row gap-4 ml-3 uppercase font-barlowCondensed tracking-wider">
        <a href="#">
          <li>
            <span className="font-bold">00</span> home
          </li>
        </a>
        <a href="#">
          <li>
            <span className="font-bold">01</span> destination
          </li>
        </a>
        <a href="#">
          <li>
            <span className="font-bold">02</span> crew
          </li>
        </a>
        <a href="#">
          <li>
            <span className="font-bold">03</span> technology
          </li>
        </a>
      </ul>
    </div>
  );
};

export default NavMenu;
