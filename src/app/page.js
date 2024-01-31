"use client";
import React, { useEffect, useState } from "react";
import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";

export default function Home() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const nav = document.getElementById("nav");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  const scrollToCardsSection = () => {
    const cardsSection = document.getElementById("cards-section");

    if (cardsSection) {
      const isMobileView = window.innerWidth <= 640;
      const scrollOffset = isMobileView
        ? cardsSection.offsetTop - navHeight
        : cardsSection.offsetTop - navHeight + window.innerHeight / 2;

      const maxScroll = cardsSection.offsetTop - navHeight;
      window.scrollTo({
        top: Math.min(scrollOffset, maxScroll),
        behavior: "smooth",
      });
    }
  };
  
  return (
    <>
      <div className="relative">
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="font-semibold text-white flex flex-col items-center justify-center h-screen text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:pb-10 pb-7" style={{ textShadow: '4px 4px gray' }}>
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
  
      <div id="about" className="bg-black">
        <div>
          <About />
        </div>
      </div>
  
      <div id="about" className="bg-blue-600" onClick={scrollToCardsSection}>
        <div>
          <About />
        </div>
      </div>
  
      <img
        className="size-16 fixed bottom-0 right-0 m-5"
        src="/images/music-disks/pigstep.png"
        alt="Pigstep Image"
      />
    </>
  );
}