import React from "react";

export default function Card({
  imageUrl,
  title,
  description,
  buttonLink,
}) {
  

  return (
    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
      <div className="w-96 h-52 bg-white shadow-lg rounded-md overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-600 text-white">
          <div className="flex gap-1 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="h-full bg-blue-100">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          
        </div>
      </div>
    </a>
  );
}
