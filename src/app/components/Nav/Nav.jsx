"use client";
import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = ({ currentPath }) => {
  return (
    <Popover className="nav container text-white mx-auto flex items-center px-6 py-2 h-20">
      <Link href="/" passHref>
        <div className="font-bold text-lg cursor-pointer">DylanWDev</div>
      </Link>
      <div className="grow">
        <div className="hidden text-lg sm:flex items-center justify-end gap-5">
          <Link href="/about" passHref>
            <div className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${currentPath === "/about" ? "after:scale-x-100" : ""}`}>
              About
            </div>
          </Link>
          <Link href="/blog" passHref>
            <div className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${currentPath === "/blog" ? "after:scale-x-100" : ""}`}>
              Blog
            </div>
          </Link>
          <Link href="/projects" passHref>
            <div className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-violet-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${currentPath === "/projects" ? "after:scale-x-100" : ""}`}>
              Work
            </div>
          </Link>
          <button className="hire-me flex rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400 shadow">
            Hire Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-2 w-5 h-6"
            >
              {/* ... */}
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
                <Link href="/about" passHref>
                  <div className={`focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2 ${currentPath === "/about" ? "text-violet-600" : ""}`}>
                    About
                  </div>
                </Link>
                <Link href="/blog" passHref>
                  <div className={`focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2 ${currentPath === "/blog" ? "text-violet-600" : ""}`}>
                    Blog
                  </div>
                </Link>
                <Link href="/projects" passHref>
                  <div className={`focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2 ${currentPath === "/projects" ? "text-violet-600" : ""}`}>
                    Work
                  </div>
                </Link>
                <button className="hire-me flex w-18 rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400 shadow">
                  Hire Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2 w-5 h-6"
                  >
                    {/* ... */}
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

