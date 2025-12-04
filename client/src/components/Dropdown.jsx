function Dropdown({ coords, objects, dropdownPosition, imgDimension }) {
  const isInTargetBox = (realX, realY, object, imgScale) => {
    const d = Math.hypot(realX - object.x, realY - object.y);
    const boxRadius = (75 / 2) * imgScale;
    const sumOfRadii = boxRadius + object.radius;

    return d <= sumOfRadii;
  };

  const handleObjectClick = async (object) => {
    const realX = Math.round(
      (coords.x / imgDimension.width) * imgDimension.naturalWidth
    );
    const realY = Math.round(
      (coords.y / imgDimension.height) * imgDimension.naturalHeight
    );

    const imgScale = imgDimension.naturalWidth / imgDimension.width;

    if (isInTargetBox(realX, realY, object.coords, imgScale))
      console.log("true");
    else console.log("false");
  };
  return (
    <ul
      style={dropdownPosition}
      className="absolute bg-[#1e1e1e] rounded-lg w-[150px]"
    >
      {objects.map((object) => {
        return (
          <li key={object.id} className="">
            <button
              onClick={() => handleObjectClick(object)}
              className="flex gap-3 h-[65px] p-2 cursor-pointer hover:bg-[#272727] w-full"
            >
              <img
                src={object.img}
                alt=""
                className="w-[50px] h-[50px] flex rounded-lg"
              />
              <span className="flex-1 text-start">{object.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
