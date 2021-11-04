const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        require: "Enter the type for the workout"
      },
      name: {
        type: String,
        trim: true,
        require: "Enter a name for the workout"
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
