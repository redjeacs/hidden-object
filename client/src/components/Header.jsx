import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold text-white">Hidden Object</div>
      <div className="flex gap-4 text-l">
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
