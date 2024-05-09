"use client";
import React from "react";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Work from "./components/Work/Work.jsx";
import Jukebox from "./components/jukebox/Jukebox.jsx";
import Moon from "./components/Moon/Moon.jsx";
import Contact from "./components/Contact/contact.jsx";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 w-full z-50 sticky">
        <Nav />
      </div>

      <div id="landing" className="relative" style={{ marginTop: "-4rem" }}> {/* Adjust the negative margin to match the height of your nav */}
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="font-semibold text-white flex flex-col items-center justify-center h-svh text-center relative z-10">
          <Moon />
        </div>
      </div>

      <div id="about" className="bg-DarkBG">
        <div>
          <About />
        </div>
      </div>

      <div id="work" className="bg-blue-600">
        <div>
          <Work />
        </div>
      </div>

      <div id="contact" className="bg-DarkBG h-screen flex justify-center items-center">
        <div>
          <Contact />
        </div>
      </div>

      <Jukebox />
    </>
  );
}
