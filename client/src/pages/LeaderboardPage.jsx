import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function LeaderboardPage() {
  const { games } = useOutletContext();
  const [gameId, setGameId] = useState("");
  const [scores, setScores] = useState([]);

  useEffect(() => {
    if (games && games.length > 0 && !gameId) setGameId(games[0].id);
  });

  useEffect(() => {
    if (!gameId) return;

    const fetchScores = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}/game/${gameId}/leaderboard`
        );
        if (!res.ok) console.error("failed to fetch leaderboard");
        const data = await res.json();
        setScores(data.scores);
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
          const isSelected = game.id === gameId;
          return (
            <div
              key={game.id}
              onClick={() => setGameId(game.id)}
              className={`max-w-[320px] max-h-[340px] rounded-xl bg-gray-800 cursor-pointer pointer-events-auto hover:scale-105 transition-transform
        ${
          isSelected
            ? "border-4 border-[#fffb00] shadow-lg"
            : "border border-gray-700"
        }`}
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
      <div className="mt-8 w-full flex flex-col items-center gap-4">
        <h1 className="text-xl">
          {games.find((game) => game.id === gameId)?.title}
        </h1>
        <table className="border border-gray-1 w-1/3 text-white">
          <thead>
            <tr className="bg-slate-600">
              <th>Rank</th>
              <th>Username</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index} className="text-lg text-center">
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardPage;
