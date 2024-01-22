import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar flex justify-between h-20 px-60 items-center">
      <h1 className="text-xl text-white font-bold">LOGO</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-gray-700">Blog</li>
          <li className="font-semibold text-gray-700">Projects</li>
          <button className="button-bg hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400  shadow">
          Button
        </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
