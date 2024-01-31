"use client"
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const numStars = 125; // Adjust the number of stars as needed
    const starsArray = [];

    const heightDiv = document.querySelector('.height');
    const heightDivRect = heightDiv.getBoundingClientRect();

    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * 6) + 1; // Random star size
      const x = Math.random() * window.innerWidth; // Random X position within viewport width
      const y = Math.random() * (heightDivRect.height - size); // Random Y position within the height of the ".height" div

      // Random color (for example, you can use 'white' or 'yellow')
      const color = 'white';

      // Random opacity for twinkling effect
      const opacity = Math.random() * 0.5 + 0.5; // Adjust the range as needed

      // Random rotation for each star
      const rotation = Math.floor(Math.random() * 360); // Random rotation in degrees

      // Random delay for the twinkling animation
      const animationDelay = Math.random() * 5 + 's'; // Adjust the range as needed

      starsArray.push({ x, y, size, color, opacity, rotation, animationDelay });
    }

    setStars(starsArray);
  };

  useEffect(() => {
    // Initial star generation
    generateStars();

    // Regenerate stars when the window is resized
    window.addEventListener('resize', generateStars);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <div className="height">
      <div className="star-field">
        {stars.map((star, index) => (
          <div
            key={index}
            className={`star twinkle`} // Apply the "twinkle" class to all stars
            style={{
              width: star.size + 'px',
              height: star.size + 'px',
              backgroundColor: star.color,
              left: star.x + 'px',
              top: star.y + 'px',
              opacity: star.opacity,
              transform: `rotate(${star.rotation}deg)`, // Set the rotation
              animation: `twinkle 2s infinite alternate ${star.animationDelay}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
