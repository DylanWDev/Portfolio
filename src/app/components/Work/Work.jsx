"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

export default function Work() {
  return (
    <div className="flex flex-col justify-center text-center container h-screen mx-auto p-8">
      <div
        style={{ textShadow: "0px 0.1em gray" }}
        className="hide underline underline-offset-8 text-white text-5xl md:text-6xl lg:text-7xl mb-10 "
      >
        Work
      </div>
      <div className="flex gap-5">
        <Card
          imageUrl="/images/project-images/vitala.png"
          title="Vitala"
          description="Your card description goes here."
          buttonText="Visit Website"
          buttonLink="https://example.com"
        />

        <Card
          imageUrl="/images/project-images/alarm-clock.png"
          title="Vitala"
          description="Your card description goes here."
          buttonText="Visit Website"
          buttonLink="https://example.com"
        />

        <Card
          imageUrl="/images/project-images/mind-reader.png"
          title="Vitala"
          description="Your card description goes here."
          buttonText="Visit Website"
          buttonLink="https://example.com"
        />

        <Card
          imageUrl="/images/project-images/weather-app.png"
          title="Vitala"
          description="Your card description goes here."
          buttonText="Visit Website"
          buttonLink="https://example.com"
        />
      </div>
    </div>
  );
}
