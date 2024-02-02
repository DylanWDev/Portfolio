"use client";
import React, { useEffect, useState } from "react";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Jukebox from "./components/jukebox/Jukebox.jsx";
import Moon from "./components/Moon/Moon.jsx";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="font-semibold text-white flex flex-col items-center justify-center h-svh text-center relative z-10">
          <Moon />
        </div>
      </div>

      <div className="absolute top-0 w-full z-50">
        <Nav />
      </div>

      <div id="about" className="bg-DarkBG">
        <div>
          <About />
        </div>
      </div>

      <div id="about" className="bg-blue-600">
        <div>
          <About />
        </div>
      </div>

      <Jukebox />
    </>
  );
}
