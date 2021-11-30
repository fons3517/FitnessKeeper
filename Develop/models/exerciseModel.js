const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    allowNull: false,

  },

  type: {
    type: String,
  },

  weight: {
    type: String,
  },

  sets: {
    type: String,
  },

  reps: {
    type: String,

  },

  duration: {
    type: String,

  },

  cardio: {
    type: String,

  }

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
