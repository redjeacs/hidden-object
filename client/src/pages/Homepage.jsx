import Card from "../components/Card";
import Header from "../components/Header";

const games = [
  {
    id: "abar4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  },
];

function Homepage() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="grid p-4 text-white justify-center items-center grow">
        {games &&
          games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
