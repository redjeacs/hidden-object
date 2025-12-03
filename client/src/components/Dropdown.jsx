function Dropdown({ coords, objects }) {
  const handleObjectClick = async () => {
    console.log(coords);
  };
  return (
    <ul
      style={{ right: "-150px" }} //get from gamepage
      className="absolute bg-[#1e1e1e] rounded-lg w-[150px]"
    >
      {objects.map((object) => {
        return (
          <button
            onClick={handleObjectClick}
            className="cursor-pointer hover:bg-[#272727] w-full"
          >
            <li key={object.id} className="flex gap-3 h-[65px] p-2">
              <img
                src={object.img}
                alt=""
                className="w-[50px] h-[50px] flex rounded-lg"
              />
              <span className="flex-1 text-start">{object.name}</span>
            </li>
          </button>
        );
      })}
    </ul>
  );
}

export default Dropdown;
