import { useOutletContext } from "react-router-dom";

function LeaderboardPage() {
  const { games } = useOutletContext();
  console.log(games);

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-4xl ">Games</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] min-w-[300px] max-w-[90vw] p-4 text-white justify-items-center items-center self-center gap-8">
        {games.map((game) => {
          return (
            <div className="max-w-[320px] max-h-[340px] rounded-xl bg-gray-800">
              <img src={game.img} alt="" />
              <div>{game.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeaderboardPage;
