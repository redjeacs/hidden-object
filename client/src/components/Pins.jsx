function Pins({ objects, imgDimension }) {
  const findPinPosition = (objectX, objectY) => {
    const x = (objectX / imgDimension.naturalWidth) * imgDimension.width;
    const y = (objectY / imgDimension.naturalHeight) * imgDimension.height;

    return { left: x + "px", top: y + "px" };
  };

  return (
    <>
      {objects.map((object) => {
        if (!object.isFound) return null;
        return (
          <div
            key={object.id}
            className="absolute z-40 translate-x-[-50%] translate-y-[-70%]"
            style={findPinPosition(object.x, object.y)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        );
      })}
    </>
  );
}
export default Pins;
