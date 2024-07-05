const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db-config");
require("dotenv").config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Success");
});

app.use("/api", require("./routes/index-route"));

app.use(express.json());

const port = process.env.Port || 4000;

app.listen(port, () => {
  console.log(`Application successfully running on ${port}`);
});
