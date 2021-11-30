const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({

  Day: {
    type: Date,
    allowNull: false
  },

  type: {
    type: String,
    allowNull: false
  },

  name: {
    type: String,
    allowNull: false
  },

  duration: {
    type: Number,
    allowNull: false
  },

  distance: {
    type: Number,
    allowNull: false
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
