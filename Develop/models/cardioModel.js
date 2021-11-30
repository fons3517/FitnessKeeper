const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const CardioSchema = new Schema({

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

  distance: {
    type: Number,
    allowNull: false,

  },

  workoutCreated: {
    type: Date,
    default: Date.now
  }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;
