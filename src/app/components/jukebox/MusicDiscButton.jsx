import React from "react";

export default function MusicDiscButton({ onClick, imageSrc, label }) {
  return (
    <div className="flex justify-center mb-5 h-18">
      <button
        className={`size-20`}
        onClick={onClick}
      >
        <img
          src={imageSrc}
          alt={label}
        />
      </button>
    </div>
  );
}
