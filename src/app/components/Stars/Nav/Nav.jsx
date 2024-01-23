import React from "react";

const Nav = () => {
  return (
    <nav className="navbar flex justify-between h-20 px-60 items-center">
      <h1 className="text-xl text-white font-bold">LOGO</h1>
      <div className="flex items-center">
        <ul className="flex items-center space-x-6">
          <li className="font-semibold text-white">about</li>
          <li className="font-semibold text-white">Blog</li>
          <li className="font-semibold text-white">Projects</li>
          <button className="flex bg-transparent rounded-lg hover:bg-gray-100 text-white font-semibold py-2 px-4 border border-gray-400  shadow">
            Hire Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
