import Card from "../components/Card";
import Header from "../components/Header";

const games = [
  {
    id: "abar4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  },
  {
    id: "adsfasdf;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  },
  {
    id: "abarasdfahga4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  },
  {
    id: "abar4hahdasdhadakdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  },
];

function Homepage() {
  return (
    <div className="flex flex-col h-full">
      <div className="grid md:grid-cols-2 p-4 md:max-w-[80vw] lg:grid-cols-3 xl:grid-cols-4 text-white justify-center items-center grow self-center gap-8">
        {games &&
          games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
