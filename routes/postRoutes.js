const express = require("express");
const postRoute = express.Router();
const postDb = require("../data/helpers/postDb");

postRoute.use(express.json());

postRoute.get("/", (req, res, next) => {
  postDb
    .get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});

postRoute.get("/:id", (req, res, next) => {
  postDb
    .getById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});
postRoute.put("/:id", (req, res, next) => {
  const { id } = req.params;
  postDb
    .update(id, { text: req.body.text, user_id: req.body.user_id })
    .then(data => {
      if (data == 1) {
        res.status(200).json({ message: `Post of id ${id} was updated` });
      } else {
        res.status(500).json("an error occured", err);
      }
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});
postRoute.post("/", (req, res, next) => {
  postDb
    .insert({ text: req.body.text, user_id: req.body.user_id })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json("an error occured", err);
    });
});
postRoute.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  postDb
    .remove(id)
    .then(data => {
      if (data == 1) {
        res.status(200).json({ message: `Post of id ${id} was deleted` });
      } else {
        res.status(500).json("an error occured", err);
      }
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});

module.exports = postRoute;
