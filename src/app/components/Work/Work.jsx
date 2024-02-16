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
      
      <Card />
    </div>
  );
}
