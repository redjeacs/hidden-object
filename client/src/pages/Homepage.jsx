import Card from "../components/Card";

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
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] min-w-[300px] max-w-[90vw] p-4 text-white justify-items-center items-center grow self-center gap-8">
        {games &&
          games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
