const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

// const Exercise = require("./models/Exercise.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/WorkoutDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
