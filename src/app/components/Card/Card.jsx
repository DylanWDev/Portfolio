import React from "react";

export default function Card({
  imageUrl,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="w-96 h-52 bg-white drop-shadow-lg">
      <div className="flex flex-row w-full bg-slate-600 h-5">
        <div className="flex gap-1 items-center ml-2">
          <div className="size-3 rounded-full bg-red-500"></div>
          <div className="size-3 rounded-full bg-yellow-500"></div>
          <div className="size-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="bg-blue-100 h-full">
        <img
          className="w-full h-full object-cover"
          src="/images/project images/alarm-clock.png"
          alt="Alarm Clock"
        />
      </div>
    </div>
  );
}
