import Nav from "../components/Nav/Nav";
import Stars from "../components/Stars/Stars"

export default function About() {
  return (
    <div className="">
      <div className="star-bg absolute star-container ">
        <Stars />
      </div>
      <div className="absolute top-0 w-full">
        <Nav />
      </div>
    </div>
  );
}