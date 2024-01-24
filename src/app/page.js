"use client"
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Set overflow to "hidden" when the component mounts
    document.body.style.overflow = 'hidden';

    // Clean up by resetting overflow when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="">
      <div className="absolute top-0 w-full sticky">
        <Nav />
      </div>
      <div className="relative">
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="pb-24 pointer-events-none font-semibold text-white flex flex-col items-center justify-center h-screen text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:pb-10 pb-7">
            Hi, I'm Dylan.
            <br />
          </h1>
          <span className="text-md lg:text-2xl pb-5">
            a full-stack web developer.
          </span>
        </div>
      </div>
    </div>
  );
}