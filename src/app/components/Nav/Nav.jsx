"use client"
import React from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Nav = () => {

  return (
    <Popover className="container text-white mx-auto flex items-center px-6 py-2 h-20">
      <Link className="cursor-pointer font-bold" href="/">Portfolio</Link>
      <div className="grow">
        <div className="hidden cursor-pointer sm:flex items-center justify-end gap-5">
        <Link className="cursor-pointer" href="about">About</Link>
        <Link href="blog">Blog</Link>
        <Link href="projects">Work</Link>
        <button className="hire-me flex  rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400  shadow">
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
        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500">
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

<Popover.Panel focus className="z-5 absolute insert-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
  <div className="rounded-lg  bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
    <div className="px-5 pt-5 pb-6">
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
        <Link className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2" href="about">About</Link>
        <Link className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2" href="blog">Blog</Link>       
        <Link className="focus:outline-none focus:ring-2 focus:ring-insert focus:ring-gray-500 px-2" href="projects">Work</Link> 
        <button className="hire-me flex w-18 rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400  shadow">
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
