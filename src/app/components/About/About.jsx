import React, { useEffect } from "react";

export default function About() {
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

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Clean up the observer when the component unmounts
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="flex flex-col justify-center container h-screen mx-auto p-8">
      <div style={{ textShadow: "0px 0.1em gray" }} className="underline underline-offset-8 text-white text-6xl mb-10 ">About Me!</div>
      <h1
        className="hide text-3xl md:text-5xl lg:text-5xl text-white font-bold mb-10"
        style={{ textShadow: "0px 0.1em gray" }}
      >
        Hi, I'm Dylan a full-stack web developer.
        <br />
      </h1>
      <div className="flex flex-col sm:flex-row gap-28">
        <div className="text-white">
          <p className="hide text-md md:text-xl lg:text-2xl">
            My coding journey began in the summer of 2022 when I enrolled in an
            intro to web development class. The excitement I felt during that
            summer ignited a passion for coding that led me to join a bootcamp
            in the fall of 2023.
          </p>
          <p className="hide text-md md:text-xl lg:text-2xl mt-4">
            I thrive on turning ideas into reality through code, and I'm
            dedicated to creating innovative and user-friendly applications. In
            the fast-paced world of web development, my focus is on continuous
            learning and growth.
          </p>
        </div>
        <div className="size-80 flex-shrink-0">
          <img
            className="object-cover w-full h-full"
            src="/images/IMG_9082.JPG"
          />
        </div>
      </div>
    </div>
  );
}
