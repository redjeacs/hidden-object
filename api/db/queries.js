require("dotenv").config();
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const adapter = new PrismaPg({
  connectionString: process.env.LOCAL_DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

exports.getAllGames = async () => {
  const games = await prisma.game.findMany({
    include: { scores: true },
  });
  return games;
};

exports.getGame = async (gameId) => {
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { objects: true, scores: true },
  });
  return game;
};

exports.startGameTimer = async (gameId) => {
  const game = await prisma.game.update({
    where: { id: gameId },
    data: { startedAt: new Date(), finishedAt: null },
  });

  return game;
};

exports.stopGameTimer = async (gameId) => {
  const game = await prisma.game.update({
    where: { id: gameId },
    data: { finishedAt: new Date() },
  });

  return game;
};

exports.postScore = async (username, time, gameId) => {
  await prisma.score.create({
    data: {
      username: username,
      time: time,
      game: { connect: { id: gameId } },
    },
  });
};

exports.getScores = async (gameId) => {
  const scores = await prisma.score.findMany({
    where: { gameId: gameId },
    orderBy: { time: "asc" },
  });

  return scores;
};
