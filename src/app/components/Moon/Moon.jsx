import React from "react";
// Make sure to import your component styles

const Moon = () => {
  return (
    <div className="size-16 font-semibold text-white flex flex-col items-center justify-center h-svh text-center relative z-10">
      <img id="moon" src="/images/moon.png" alt="Moon" />
    </div>
  );
};

export default Moon;