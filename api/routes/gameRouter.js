const { Router } = require("express");
const gameController = require("../controllers/gameController.js");

const gameRouter = Router();

gameRouter.get("/games", gameController.getAllGames);
gameRouter.get("/game/:gameId", gameController.getGame);
gameRouter.post("/game/:gameId/start", gameController.startGameTimer);
gameRouter.post("/game/:gameId/finish", gameController.stopGameTimer);
gameRouter.post("/game/:gameId/leaderboard", gameController.postScore);
gameRouter.get("/game/:gameid/leaderboard", gameController.getScores);

module.exports = gameRouter;
