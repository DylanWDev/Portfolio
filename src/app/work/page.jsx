"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import Stars from "../components/Stars/Stars";
import Card from "../components/Card/Card";

export default function Projects() {
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
    <div className="">
      <div id="nav" className="absolute top-0 w-full sticky z-10">
        <Nav />
      </div>
      <section className="min-h-screen relative">
        <div className="star-bg absolute star-container">
          <Stars />
        </div>
        <div className="flex flex-col items-center justify-center h-screen relative z-5 pb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl lg:pb-10 text-white">
            View My Work
            <br />
          </h1>
          <span
            className="text-md lg:text-2xl mt-8 md:mt-10 lg:mt-0 p-2 border rounded-full animate-bounce cursor-pointer transition hover:bg-violet-600"
            onClick={scrollToCardsSection}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </span>
        </div>
      </section>
      <section
        id="cards-section"
        className="min-h-screen overflow-hidden backdrop-blur-xl flex justify-center items-center"
      >
        <div className="">
          <h1 className="text-white text-4xl font-semibold flex justify-center pb-10">
            My Projects
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-10">
            <Card
              imageUrl="/images/vitala.png"
              title="Vitala"
              description="Calorie Tracking app"
              buttonText="Click Me!"
              buttonLink="https://github.com/DylanWDev/Vitala-Frontend"
            />

            
            
          </div>
        </div>
      </section>
    </div>
  );
}
