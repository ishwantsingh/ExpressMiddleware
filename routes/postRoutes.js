const express = require("express");
const postRoute = express.Router();
const postDb = require("../data/helpers/postDb");

postRoute.use(express.json());

postRoute.get("/", (req, res, next) => {
  postDb
    .get()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json("an error occured", err);
    });
});

module.exports = postRoute;
