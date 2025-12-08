import { useEffect, useState } from "react";
import Card from "../components/Card";

function Homepage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/games`);
        if (!res.ok) console.error("failed to fetch games");
        const games = await res.json();
        setGames(games);
      } catch (err) {
        return console.error("promise failed ", err);
      }
    };
    fetchGames();
  }, []);

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
