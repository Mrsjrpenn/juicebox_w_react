require("dotenv").config();

const { PORT = 1000 } = process.env; //was 3000
const express = require("express");
const server = express();

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

const bodyParser = require("body-parser");
server.use(bodyParser.json());
const morgan = require("morgan");
server.use(morgan("dev"));
const { client } = require("./db");
client.connect();

const apiRouter = require("./api");
server.use("/api", apiRouter);

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});