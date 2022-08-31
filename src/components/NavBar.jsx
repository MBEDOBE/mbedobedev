import React, { useState } from 'react';
import { FiGrid, FiMinimize } from 'react-icons/fi';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const nav_links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'blog',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <nav
      className="flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          h-16
          text-lg text-gray-700
          bg-slate-200 shadow fixed"
    >
      <div className="flex justify-center md:px-10">
        <a href="home.jsx">
          <img className="object-scale-down h-9 w-40" src="logo.png" alt="" />
        </a>
      </div>
      <div className="hidden w-full md:flex md:items-center md:w-auto">
        <ul
          className="pt-2
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          {nav_links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer font-medium hover:scale-110 duration-300 md:p-4 py-2 block hover:text-indigo-900"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden px-10 w-full md:flex md:items-center md:w-auto">
        <a
          href="home.jsx"
          className=" w-full p-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
        >
          Get Started
        </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? (
          <FiMinimize color="blue" size={30} />
        ) : (
          <FiGrid color="blue" size={30} />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-16 right-0 w-1/2  bg-slate-200  rounded-bl-lg">
          {nav_links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-3xl hover:scale-110 duration-300 hover:text-blue-900"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
