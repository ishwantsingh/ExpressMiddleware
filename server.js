const express = require("express");
const helmet = require("helmet");
//const md = rquire("./middleware")

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res, next) => {
  res.send(`<h1>Welcome to the server land!</h1>`);
});

module.exports = server;
