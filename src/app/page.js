"use client";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import React from 'react';
import About from "./components/About/About.jsx";

export default function Home() {
  
  return (
    <>
      <div className="relative"> 
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="font-semibold text-white flex flex-col items-center justify-center h-screen text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:pb-10 pb-7">
            Hi, I'm Dylan.
            <br />
          </h1>
          <span className="text-md lg:text-2xl pb-5">
            a full-stack web developer.
          </span>
        </div>
      </div>

      <div className="absolute top-0 w-full z-50">
        <Nav />
      </div>

      <div className="relative bg-black">
        <div>
          <About/>
          <h1 className="text-white">About</h1>
        </div>
      </div>
    </>  
  );
}
