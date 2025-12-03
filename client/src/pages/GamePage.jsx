import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GamePage() {
  const { gameId } = useParams();
  const [game, setGame] = useState({
    id: "abar4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
  });
  const [coords, setCoords] = useState({ x: null, y: null });

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
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x: x, y: y });
  }

  return (
    <>
      <div className="flex text-white justify-center gap-8">
        <div>Timer</div>
        <div>Objects</div>
      </div>
      <div className="w-screen h-100% overflow-auto">
        <img
          src={game.img}
          alt=""
          className="w-auto h-auto max-w-none max-h-none object-contain"
          style={{ minWidth: "100%", minHeight: "100%" }}
          onClick={handleImageClick}
        />
      </div>
    </>
  );
}

export default GamePage;
