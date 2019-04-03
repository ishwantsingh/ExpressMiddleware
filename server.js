const express = require("express");
const helmet = require("helmet");
//const md = rquire("./middleware")
const postRoute = require("./routes/postRoutes");
const userRoute = require("./routes/userRoutes");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/posts", postRoute);
server.use("/api/users", userRoute);

server.get("/", (req, res, next) => {
  res.status(200).json(`<h1>Welcome to the server land!</h1>`);
});

module.exports = server;
