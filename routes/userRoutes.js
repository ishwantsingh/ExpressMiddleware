const express = require("express");
const userRoute = express.Router();
const userDb = require("../data/helpers/userDb");

userRoute.use(express.json());

userRoute.get("/", (req, res, next) => {
  userDb
    .get()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});

userRoute.get("/:id", (req, res, next) => {
  userDb
    .getById(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});
userRoute.put("/:id", (req, res, next) => {
  const { id } = req.params;
  userDb
    .update(id, { name: req.body.name })
    .then(data => {
      if (data == 1) {
        res.status(200).json({ message: `User of id ${id} was updated` });
      } else {
        res.status(500).json("an error occured", err);
      }
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});
userRoute.post("/", (req, res, next) => {
  userDb
    .insert({ name: req.body.name })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json("an error occured", err);
    });
});
userRoute.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  userDb
    .remove(id)
    .then(data => {
      if (data == 1) {
        res.status(200).json({ message: `User of id ${id} was deleted` });
      } else {
        res.status(500).json("an error occured", err);
      }
    })
    .catch(err => {
      res.status(500).json("an error occured", err);
    });
});

module.exports = userRoute;
