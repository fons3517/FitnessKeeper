const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const Exercise = require("./models/Exercise.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/WorkoutDB",//<===is this accurate?
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// app.post("/exercises", ({ body }, res) => {
//   Exercise.create(body)
//     .then(Exercise => {
//       res.json(Exercise);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
