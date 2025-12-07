require("dotenv").config();
const { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const adapter = new PrismaPg({
  connectionString: process.env.LOCAL_DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

exports.getAllGames = async () => {
  const games = await prisma.game.findMany();
  return games;
};

exports.getGame = async (gameId) => {
  const game = await prisma.game.findUnique({
    where: { id: gameId },
    include: { objects: true },
  });
  return game;
};
