import React from "react";

export default function Card({ imageUrl, title, description, buttonText, buttonLink }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-xl w-80 backdrop-blur-sm bg-stone-800/40">
      <div className="aspect-w-16 aspect-h-9"> {/* Aspect ratio container */}
        <img className="object-cover w-full p-5 h-2/6 rounded-lg" src={imageUrl} alt="filler" />
      </div>
      <div className="px-6 py-4 h-60">
        <div className="font-bold text-xl mb-2 text-white text-2xl">
          {title}
        </div>
        <p className="text-gray-700 text-base text-md">{description}</p>
        <span></span>
      </div>
      <div className="flex justify-center mb-5">
        <button className="hire-me rounded-lg transition hover:bg-violet-600 text-white font-semibold py-2 px-4 border border-gray-400 shadow">
          <a href={buttonLink}>{buttonText}</a>
        </button>
      </div>
    </div>
  );
}
