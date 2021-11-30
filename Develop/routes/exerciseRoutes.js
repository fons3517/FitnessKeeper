const router = require('express').Router();
const db = require('../models/Workout');

router.get("/workouts", function (req, res) {
  db.find({})
    .then(dbRecords => {
      console.log("get Route", dbRecords);
      res.json(dbRecords)
    })
    .catch(err => {
      console.log(err);
    })
});

router.put("/workouts/:id", function (req, res) {
  db.findByIdAndUpdate(req.params.id,
    { $push: { exercises: req.body } }, { new: true })
    .then(dbRecords => {
      console.log("update route", dbRecords);
      res.json(dbRecords)
    })
    .catch(err => {
      console.log(err);
    })
});

router.post("/workouts", function (req, res) {
  db.create(req.body)
    .then(dbRecords => {
      console.log("create route", dbRecords);
      res.json(dbRecords)
    })
    .catch(err => {
      console.log(err);
    })
});

router.get("/workouts/range", function (req, res) {
  db.find({}).limit(14)
    .then(dbRecords => {
      console.log("find route", dbRecords);
      res.json(dbRecords)
    })
    .catch(err => {
      console.log(err);
    })
});

module.exports = router;