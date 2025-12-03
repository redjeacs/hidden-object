import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";

function GamePage() {
  const { gameId } = useParams();
  const [game, setGame] = useState({
    id: "abar4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
    objects: [
      { id: "1245", img: "test", name: "name" },
      { id: "1235", img: "test", name: "name" },
      { id: "1234", img: "test", name: "name" },
    ],
  });
  const [coords, setCoords] = useState({ x: null, y: null });
  const [dropdown, setDropdown] = useState(false);
  const [targetBox, SetTargetBox] = useState(false);

  // useEffect(() => {
  //   async function fetchGame() {
  //     try {
  //       const res = fetch(`https://localhost:8080/game/${gameId}`);
  //       const data = await res.json();

  //       if (res.ok) {
  //         setGame(data);
  //       } else {
  //         console.error("error fetching game");
  //       }
  //     } catch (err) {
  //       console.error("fetch unsuccessful");
  //     }
  //   }
  //   fetchGame();
  // }, [gameId]);

  function handleImageClick(e) {
    SetTargetBox(!targetBox);
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log({ x, y });
    setCoords({ x: x, y: y });
  }

  return (
    <>
      <div className="flex text-white justify-center gap-8">
        <div>Timer</div>
        <div>Objects</div>
      </div>
      <div className="relative w-screen h-100% overflow-auto">
        <img
          src={game.img}
          alt=""
          className="w-auto h-auto max-w-none max-h-none object-contain"
          style={{ minWidth: "100%", minHeight: "100%" }}
          onClick={handleImageClick}
        />
        {targetBox && (
          <div
            style={{ left: coords.x, top: coords.y }}
            className="absolute translate-x-[-50%] translate-y-[-50%] rounded-full w-[75px] h-[75px] z-10 bg-black/50 border-spacing-4"
          >
            <Dropdown coords={coords} objects={game.objects} />
            <div className="rounded-full w-1 h-1 absolute bg-red-600 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default GamePage;
