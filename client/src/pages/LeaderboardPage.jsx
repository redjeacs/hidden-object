import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function LeaderboardPage() {
  const { games } = useOutletContext();
  const [gameId, setGameId] = useState(games[0].id);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/game/${gameId}/leaderboard`
        );
        if (!res.ok) console.error("failed to fetch leaderboard");
        const data = res.json();
        setLeaderboard(data.scores);
      } catch (err) {
        console.error(err);
      }
    };

    fetchScores();
  }, [gameId]);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-4xl ">Games</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] min-w-[300px] max-w-[90vw] p-4 text-white justify-items-center items-center self-center gap-8">
        {games.map((game) => {
          return (
            <div
              onClick={() => setGameId(game.id)}
              className="max-w-[320px] max-h-[340px] rounded-xl bg-gray-800"
            >
              <img
                src={game.img}
                alt=""
                className="w-[320px] max-h-[240px] object-cover rounded-t-xl"
              />
              <div className="flex flex-col p-4 items-center gap-2">
                {game.title}
              </div>
            </div>
          );
        })}
      </div>
      <div>leaderboard</div>
    </div>
  );
}

export default LeaderboardPage;
