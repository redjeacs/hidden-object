const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const gameRouter = require("./routes/gameRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", gameRouter);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express app listening on port ${PORT}`);
});
