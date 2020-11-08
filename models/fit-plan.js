const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  
  day: {
  type: Date,
  default: Date.now()

  },
  exercise: [{

    type: {
    type: String,
    trim: true,
    required: "Enter a exercise movement"

    },
  name: {
    type: String,
    trim: true,
    required: "Enter a name"

  },
  duration: {
    type: String,
    trim: true,
    required: "Enter duration time"

  },
  weight: {
    type: Number,
  },
  sets: {
  type: Number,

  },
  reps: {
  type: Number,

  },
  distance: {
  type: Number,
  required: "Enter distance range"

  },
}]

},
{
  toJSON:{
    virtuals: true
  }
}  
);

fitnessSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, fitness) => {
    return total + exercise.duration;
  }, 0)
});



const fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Exercise;


