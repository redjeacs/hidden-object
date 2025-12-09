const gameRouter = require("../routes/gameRouter");
const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", gameRouter);

describe("GET /api/games", function () {
  it("responds with status 200 and a JSON array of games", async () => {
    const res = await request(app)
      .get("/api/games")
      .set("Accept", "application/json");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("each game object has id, title, and img", async () => {
    const res = await request(app).get("/api/games");
    if (res.body.length > 0) {
      for (const game of res.body) {
        expect(game).toHaveProperty("id");
        expect(game).toHaveProperty("title");
        expect(game).toHaveProperty("img");
      }
    }
  });
});

describe("GET /api/game/:gameId", function () {
  let gameRes;

  beforeAll(async () => {
    const gamesRes = await request(app).get("/api/games");
    if (gamesRes.body.length === 0) {
      throw new Error("No games found in database to test /api/game/:gameId");
    }
    const gameId = gamesRes.body[0].id;
    gameRes = await request(app).get(`/api/game/${gameId}`);
  });

  it("responds with status 200 and a JSON object of game", () => {
    expect(gameRes.status).toBe(200);
    expect(typeof gameRes.body).toBe("object");
  });

  it("JSON object of game contains id, title, img, and an objects array", () => {
    expect(gameRes.body).toHaveProperty("id");
    expect(gameRes.body).toHaveProperty("title");
    expect(gameRes.body).toHaveProperty("img");
    expect(gameRes.body).toHaveProperty("objects");
    expect(Array.isArray(gameRes.body.objects)).toBe(true);
  });

  it("each object in objects array has name, img, x, y, and radius", () => {
    if (gameRes.body.objects.length > 0) {
      for (const obj of gameRes.body.objects) {
        expect(obj).toHaveProperty("name");
        expect(obj).toHaveProperty("img");
        expect(obj).toHaveProperty("x");
        expect(obj).toHaveProperty("y");
        expect(obj).toHaveProperty("radius");
      }
    }
  });
});

describe("POST /api/game/:gameid/start", function () {
  let gameId = "";
  beforeAll(async () => {
    const gamesRes = await request(app).get("/api/games");
    if (gamesRes.body.length === 0) {
      throw new Error("No games found in database to test /api/game/:gameId");
    }
    gameId = gamesRes.body[0].id;
  });

  it("responds with status 200 and json object of startedAt", async () => {
    const res = await request(app).post(`/api/game/${gameId}/start`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("startedAt");
  });
});

describe("POST /api/game/:gameid/finish", function () {
  let gameId = "";
  beforeAll(async () => {
    const gamesRes = await request(app).get("/api/games");
    if (gamesRes.body.length === 0) {
      throw new Error("No games found in database to test /api/game/:gameId");
    }
    gameId = gamesRes.body[0].id;
  });

  it("responds with status 200 and json object of time and finishedAt", async () => {
    const res = await request(app).post(`/api/game/${gameId}/finish`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("finishedAt");
    expect(res.body).toHaveProperty("time");
  });
});
