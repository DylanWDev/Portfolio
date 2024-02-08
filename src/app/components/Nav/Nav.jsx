"use client";
import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPage = (href) => currentPath === href;

  return (
    <Popover className="nav container text-white mx-auto flex items-center px-6 py-2 h-20 sticky top-0 z-50">
      <Link to="/" className=" font-bold text-lg" smooth={true} duration={500}>
        DylanWDev
      </Link>
      <div className="grow">
        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={`relative w-fit block transition ease-in-out hover:text-violet-600 cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isCurrentPage("#about") ? "text-violet-600" : ""
            }`}
          >
            About
            <span
              className={`absolute block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                isCurrentPage("#about") ? "scale-x-100" : ""
              }`}
            ></span>
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className={`relative w-fit block transition ease-in-out hover:text-violet-600 cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isCurrentPage("#blog") ? "text-violet-600" : ""
            }`}
          >
            Blog
            <span
              className={`absolute block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                isCurrentPage("#blog") ? "scale-x-100" : ""
              }`}
            ></span>
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className={`relative w-fit block transition ease-in-out hover:text-violet-600 cursor-pointer after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
              isCurrentPage("#work") ? "text-violet-600" : ""
            }`}
          >
            Work
            <span
              className={`absolute block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${
                isCurrentPage("#work") ? "scale-x-100" : ""
              }`}
            ></span>
          </Link>
          <button
            onClick={() => scroll.scrollToBottom()}
            className="hire-me flex rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400  shadow"
          >
            Hire Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 w-5 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex grow items-center justify-end sm:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Popover.Panel
        focus
        className="z-5 absolute right-0 left-auto top-0 origin-top-right transform transition md:hidden"
      >
        <div className=" rounded-lg p-5 bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div clas4sName="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <h1 className="font-bold mr-3">Close Menu</h1>
              <div className="mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-600">
                  <span className="sr-only">Close Menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2"
                >
                  About
                </Link>
                <Link
                  to="blog"
                  smooth={true}
                  duration={500}
                  className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2"
                >
                  Blog
                </Link>
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2"
                >
                  Work
                </Link>
                <button
                  onClick={() => scroll.scrollToBottom()}
                  className="hire-me flex w-18 rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400  shadow"
                >
                  Hire Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2 w-5 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default Nav;
