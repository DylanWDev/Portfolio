import Nav from "../components/Nav/Nav";
import Stars from "../components/Stars/Stars";
import Card from "../components/Card/Card";

export default function Projects() {
  return (
    <div className="relative">
      <div className="star-bg absolute star-container">
        <Stars />
      </div>
      <div className="absolute top-0 w-full sticky">
        <Nav />
      </div>
      <div className="grid justify-items-center items-center h-screen">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          <Card
            imageUrl="/images/IMG_9082.JPG"
            title="The Coldest Sunset"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            buttonText="Click Me!"
          />
          <Card
            imageUrl="/images/IMG_9082.JPG"
            title="The Coldest Sunset"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            buttonText="Click Me!"
          />
          <Card
            imageUrl="/images/IMG_9082.JPG"
            title="The Coldest Sunset"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
            buttonText="Click Me!"
          />
        </div>
      </div>
    </div>
  );
}
