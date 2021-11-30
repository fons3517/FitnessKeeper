const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    allowNull: false,

  },

  name: {
    type: String,
    allowNull: false,

  },

  duration: {
    type: Number,
    allowNull: false,

  },

  weight: {
    type: Number,
    allowNull: false,

  },

  reps: {
    type: Number,
    allowNull: false,

  },

  sets: {
    type: Number,
    allowNull: false,

  },

  workoutCreated: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
