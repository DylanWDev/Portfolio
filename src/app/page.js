import Stars from "./components/Stars/Stars.jsx"

export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen text-center">
      <Stars />
      <h1 className="text-6xl pb-10">Dylan Wyrick.<br/></h1>
      <span className="text-2xl">full-stack wed developer.</span>
    </div>
  );
}
