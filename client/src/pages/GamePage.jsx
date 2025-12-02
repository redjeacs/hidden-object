import Header from "../components/Header";
function GamePage() {
  return (
    <>
      <Header />
      <div className="w-screen h-100% overflow-auto">
        <img
          src="../src/assets/ghibli.jpg"
          alt=""
          className="w-auto h-auto max-w-none max-h-none object-contain"
          style={{ minWidth: "100%", minHeight: "100%" }}
        />
      </div>
    </>
  );
}

export default GamePage;
