"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Stars.module.css';

const Stars = () => {
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    const numStars = 350;
    const starsArray = [];

    for (let i = 0; i < numStars; i++) {
      const size = Math.floor(Math.random() * 3) + 1;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const color = 'white';
      const opacity = Math.random() * 0.5 + 0.5;
      const animationDelay = Math.random() * 5 + 's';

      starsArray.push({ x, y, size, color, opacity, animationDelay });
    }

    setStars(starsArray);
  };

  useEffect(() => {
    generateStars();

    window.addEventListener('resize', generateStars);

    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);

  return (
    <div className="star-field">
      {stars.map((star, index) => (
        <div
          key={index}
          className={`star twinkle`}
          style={{
            width: star.size + 'px',
            height: star.size + 'px',
            backgroundColor: star.color,
            left: star.x + 'px',
            top: star.y + 'px',
            opacity: star.opacity,
            animation: `twinkle 2s infinite alternate ${star.animationDelay}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default dynamic(() => Promise.resolve(Stars), { ssr: false });
