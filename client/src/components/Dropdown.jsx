function Dropdown({ coords, objects, dropdownPosition }) {
  const handleObjectClick = async () => {
    console.log(coords);
  };
  console;
  return (
    <ul
      style={dropdownPosition} //get from gamepage
      className="absolute bg-[#1e1e1e] rounded-lg w-[150px]"
    >
      {objects.map((object) => {
        return (
          <li key={object.id} className="">
            <button
              onClick={handleObjectClick}
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
