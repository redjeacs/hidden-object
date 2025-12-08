const db = require("../db/queries");
const CustomNotFoundError = require("../middlewares/CustomNotFoundError");

exports.getAllGames = async (req, res, next) => {
  try {
    const games = await db.getAllGames();
    if (!games || games.length === 0)
      throw new CustomNotFoundError("no games found!");
    res.status(200).json(games);
  } catch (err) {
    next(err);
  }
};

exports.getGame = async (req, res, next) => {
  try {
    const gameId = req.params.gameId;
    const game = await db.getGame(gameId);
    if (!game || game.length === 0)
      throw new CustomNotFoundError("cannot find game");
    res.status(200).json(game);
  } catch (err) {
    next(err);
  }
};

exports.startGameTimer = async (req, res, next) => {
  try {
    const gameId = req.params.gameId;
    const game = await db.startGameTimer(gameId);
    if (!game) throw new CustomNotFoundError("failed to start timer");
    res.status(200).json({ startedAt: game.startedAt });
  } catch (err) {
    console.error("Timer error: ", err);
    next(err);
  }
};

exports.stopGameTimer = async (req, res, next) => {
  try {
    const gameId = req.params.gameId;
    const game = await db.stopGameTimer(gameId);
    if (!game) throw new CustomNotFoundError("failed to stop timer");
    const time =
      game.startedAt && game.finishedAt
        ? (new Date(game.finishedAt) - new Date(game.startedAt)) / 1000
        : null;
    res.status(200).json({ time: time, finishedAt: game.finishedAt });
  } catch (err) {
    console.error("Timer error: ", err);
    next(err);
  }
};
