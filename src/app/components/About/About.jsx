import React from "react";

export default function About() {
  return (
    <div className="container h-svh mx-auto p-8">
      <h1 className="text-3xl md:text-5xl lg:text-5xl text-white font-bold mb-4">About Me</h1>
      <div className="grid place-content-center">
        <p className="text-md md:text-xl lg:text-2xl text-gray-700">
          Welcome to my personal website! My name is Dylan, and I am a passionate full-stack web developer with a love for creating
          innovative and user-friendly applications. I enjoy turning ideas into reality through code and constantly strive to learn and grow in the ever-evolving world of web development.
        </p>
        <p className="text-md md:text-xl lg:text-2xl text-gray-700 mt-4">
          In my free time, I like to explore new technologies, contribute to open-source projects, and occasionally write about my experiences in the tech industry. Feel free to browse through my projects and don't hesitate to reach out if you have any questions or collaboration opportunities!
        </p>
      </div>
    </div>
  );
}
