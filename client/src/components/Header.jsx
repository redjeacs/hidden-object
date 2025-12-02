import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 md:justify-around">
      <div className="md:text-2xl font-bold text-white">
        <Link to="/">Hidden Object</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/leaderboard" className="text-white">
          Leaderboard
        </Link>
      </div>
    </div>
  );
}

export default Header;
