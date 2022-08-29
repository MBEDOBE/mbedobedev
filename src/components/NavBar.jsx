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
    <div className="flex justify-between items-center w-full px-6 h-16 text-white bg-black fixed">
      <a href="home.jsx" className="md:px-20">
        <img className="w-8" src="mylogo.png" alt="" />
      </a>

      <ul className="justify-center hidden md:flex">
        {nav_links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium hover:scale-110 duration-300"
          >
            {link}
          </li>
        ))}
      </ul>
      <a
        href="index.html"
        className="px-20 hidden md:block p-3   text-white bg-gray-600  hover:bg-gray-300 rounded-full"
      >
        Get Started
      </a>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FiMinimize size={30} /> : <FiGrid size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-16 right-0 w-1/2  bg-blue-500 rounded-bl-lg">
          {nav_links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer py-6 text-3xl hover:scale-110 duration-300"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
