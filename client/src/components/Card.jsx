import { Link } from "react-router-dom";

function Card({ game }) {
  return (
    <div className="max-w-[320px] max-h-[340px] rounded-xl bg-gray-800">
      <img
        src={game.img}
        alt=""
        className="w-[320px] max-h-[240px] object-cover rounded-t-xl"
      />
      <div className="flex flex-col p-4 items-center gap-2">
        <h3>{game.title}</h3>
        <Link
          to={`/game/${game.id}`}
          className="px-4 py-2 bg-[#089b9b] rounded-lg hover:bg-[#0ab9b9] hover:translate-y-[-1px]"
        >
          Start Game
        </Link>
      </div>
    </div>
  );
}

export default Card;
