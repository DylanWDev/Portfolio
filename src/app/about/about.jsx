import Stars from "./components/Stars/Stars.jsx";
import Nav from "./components/Nav/Nav.jsx";

export default function About() {
  return (
    <div className="relative ">
      <div className="star-bg absolute star-container ">
        <Stars />
      </div>
      <div className="absolute top-0 w-full">
        <Nav />
      </div>
      <div className="font-semibold text-white flex flex-col items-center justify-center h-screen text-center relative z-10">
        <h1 className="text-6xl pb-10">
          About
          <br />
        </h1>
        <span className="text-2xl pb-5">a web developer.</span>
      </div>
    </div>
  );
}