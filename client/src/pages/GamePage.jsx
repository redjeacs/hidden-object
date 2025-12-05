import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Alert from "../components/Alert";
import Pins from "../components/Pins";

function GamePage() {
  const { gameId } = useParams();
  const [game, setGame] = useState({
    id: "abar4akdj;ld",
    title: "Studio Ghibli: Spirited Away",
    img: "../src/assets/ghibli.jpg",
    objects: [
      {
        id: "1245",
        img: "../src/assets/object.jpg",
        name: "longer name",
        coords: { x: 929, y: 938, radius: 25 },
      },
      {
        id: "1235",
        img: "../src/assets/object.jpg",
        name: "second name",
        coords: { x: 929, y: 938, radius: 25 },
      },
      {
        id: "1234",
        img: "../src/assets/object.jpg",
        name: "name",
        coords: { x: 929, y: 938, radius: 25 },
      },
    ],
  });
  const [coords, setCoords] = useState({ x: null, y: null });
  const [imgDimension, setImgDimension] = useState({
    width: null,
    height: null,
    naturalWidth: null,
    naturalHeight: null,
  });
  const [dropdown, setDropdown] = useState(false);
  const [targetBox, SetTargetBox] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [alertDetails, setAlertDetails] = useState({
    success: null,
    message: null,
  });

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

  const getDropdownPosition = (coordsX, coordsY, imageWidth, imageHeight) => {
    const pos = {};

    if (coordsX + 150 > imageWidth) {
      pos.right = "75px";
    } else {
      pos.left = "75px";
    }
    if (coordsY + 195 > imageHeight) {
      pos.bottom = "75px";
    } else {
      pos.top = "75px";
    }
    return pos;
  };

  const handleImageClick = (e) => {
    SetTargetBox(!targetBox);

    if (targetBox) return;

    const rect = e.target.getBoundingClientRect();
    const coordsX = e.clientX - rect.left;
    const coordsY = e.clientY - rect.top;
    const imageWidth = e.currentTarget.width;
    const imageHeight = e.currentTarget.height;
    const naturalWidth = e.currentTarget.naturalWidth;
    const naturalHeight = e.currentTarget.naturalHeight;

    setDropdownPosition(
      getDropdownPosition(coordsX, coordsY, imageWidth, imageHeight)
    );

    setImgDimension({
      width: imageWidth,
      height: imageHeight,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
    });

    setCoords({ x: coordsX, y: coordsY });
  };

  const handleAlert = (success, message) => {
    setAlertDetails({
      success: success,
      message: message,
    });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      setAlertDetails({
        success: null,
        message: null,
      });
    }, 1000);
  };

  return (
    <>
      <div className="flex text-white justify-center gap-8">
        <div>Timer</div>
        <div>Objects</div>
      </div>
      <div className="relative w-screen h-100% overflow-auto">
        {showAlert && (
          <Alert
            id="alert"
            success={alertDetails.success}
            message={alertDetails.message}
          />
        )}

        <Pins objects={game.objects} imgDimension={imgDimension} />

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
            onClick={handleImageClick}
          >
            <Dropdown
              coords={coords}
              objects={game.objects}
              setGame={setGame}
              imgDimension={imgDimension}
              dropdownPosition={dropdownPosition}
              handleAlert={handleAlert}
            />
            <div className="rounded-full w-1 h-1 absolute bg-red-600 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default GamePage;
