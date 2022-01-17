import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="grid bg-white h-10 w-10 rounded-full items-center">
        <svg
          width="1"
          height="1"
          className="w-10 h-10"
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
      <ul className="hidden md:flex gap-4 uppercase font-barlowCondensed">
        <li>
          <span className="font-bold">00</span> home
        </li>
        <li>
          <span className="font-bold">01</span> destination
        </li>
        <li>
          <span className="font-bold">02</span> crew
        </li>
        <li>
          <span className="font-bold">03</span> technology
        </li>
      </ul>
      <button>
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
