import Nav from "../components/Nav/Nav";
import Stars from "../components/Stars/Stars";
import Card from "../components/Card/Card";

export default function Projects() {
  return (
    <div>
      <div className="star-bg absolute star-container">
        <Stars />
      </div>
      <div className="absolute top-0 w-full">
        <Nav />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
      <Card
        imageUrl="/images/IMG_9082.JPG"
        title="The Coldest Sunset"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
        buttonText="Click Me!"
      />
      </div>
    </div>
  );
}
