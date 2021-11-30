const Exercise = require('./Exercise.js');
const Workout = require('./Workout.js');

Workout.hasMany(Exercise, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Exercise.belongsTo(Workout, {
  foreignKey: 'user_id'
});

module.exports = { Exercise, Workout/*Cardio?*/ };
