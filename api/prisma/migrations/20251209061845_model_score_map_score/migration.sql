/*
  Warnings:

  - You are about to drop the `Score` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_gameId_fkey";

-- DropTable
DROP TABLE "Score";

-- CreateTable
CREATE TABLE "score" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "time" DOUBLE PRECISION NOT NULL,
    "gameId" TEXT NOT NULL,

    CONSTRAINT "score_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "score" ADD CONSTRAINT "score_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "game"("id") ON DELETE CASCADE ON UPDATE CASCADE;
