const { Router } = require("express");
const gameController = require("../controllers/gameController.js");

const gameRouter = Router();

gameRouter.get("/games", gameController.getAllGames);
gameRouter.get("/game/:gameId", gameController.getGame);

module.exports = gameRouter;
