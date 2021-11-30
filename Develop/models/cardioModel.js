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

})