const express = require("express");
const userRoute = express.Router();
const userDb = require("../data/helpers/userDb");

routes.use(express.json());

userRoute.get("/", (req, res, next) => {
  userDb
    .get()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json("an error occured", err);
    });
});

module.exports = userRoute;
