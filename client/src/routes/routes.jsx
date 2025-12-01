import App from "../App.jsx";
import Homepage from "../pages/Homepage.jsx";
import GamePage from "../pages/GamePage.jsx";
import LeaderboardPage from "../pages/LeaderboardPage.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/game/:gameId",
        element: <GamePage />,
      },
      {
        path: "/leaderboard",
        element: <LeaderboardPage />,
      },
    ],
  },
];

export default routes;
