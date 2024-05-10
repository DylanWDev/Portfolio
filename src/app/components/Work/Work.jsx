import React, { useEffect, useRef } from "react";
import Card from "../Card/Card";

export default function Work() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    const hiddenElements = document.querySelectorAll(".hidden-card");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center text-center container h-screen mx-auto p-8">
      <div
        style={{ textShadow: "0px 0.1em gray" }}
        className="hide underline underline-offset-8 text-white text-5xl md:text-6xl lg:text-7xl mb-10 "
      >
        Work
      </div>
      <div className="hide projects grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        <Card
          imageUrl="/images/project-images/vitala.png"
          title="Vitala"
          description="Your card description goes here."
          buttonLink="https://github.com/DylanWDev/Vitala-Frontend"
          aboutText="Vitala"
        />

        <Card
          imageUrl="/images/project-images/alarm-clock.png"
          title="Alarm Clock"
          description="Your card description goes here."
          buttonLink="https://github.com/DylanWDev/alarm-clock"
          aboutText="Alarm Clock"
        />

        <Card
          imageUrl="/images/project-images/mind-reader.png"
          title="Mind Reader"
          description="Your card description goes here."
          buttonLink="https://github.com/DylanWDev/mind-reader"
          aboutText="Mind Reader"
        />

        <Card
          imageUrl="/images/project-images/weather-app.png"
          title="Weather App"
          description="Your card description goes here."
          buttonLink="https://github.com/DylanWDev/weather-app"
          aboutText="Weather App"
        />
      </div>
    </div>
  );
}
