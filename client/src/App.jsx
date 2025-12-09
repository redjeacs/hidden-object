import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/games`);
        if (!res.ok) console.error("failed to fetch games");
        const games = await res.json();
        setGames(games);
      } catch (err) {
        return console.error("promise failed ", err);
      }
    };
    fetchGames();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="grow">
        <Outlet context={{ games }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
