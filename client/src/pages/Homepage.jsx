import Card from "../components/Card";
import { useOutletContext } from "react-router-dom";

function Homepage() {
  const { games } = useOutletContext();
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-4xl ">Games</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] min-w-[300px] max-w-[90vw] p-4 text-white justify-items-center items-center self-center gap-8">
        {games &&
          games.map((game) => {
            return <Card key={game.id} game={game} />;
          })}
      </div>
    </div>
  );
}

export default Homepage;
