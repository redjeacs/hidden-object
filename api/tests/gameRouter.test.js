const gameRouter = require("../routes/gameRouter");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", gameRouter);

test("game route works", async (done) => {
  const res = await request(app).get("/api/games");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
