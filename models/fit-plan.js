const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  
  day: {
  type: Date,
  default: Date.now()
  required: "Enter the date"

  },

  exercise: {
    type: String,
    trim: true,
    required: "exe"

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
    required: "Enter current weight"
  },
  sets: {
  type: Number,
  required: "Enter number of sets"

  },
  reps: {
  type: Number,
  required: "Enter number of reps"

  },
  distance: {
  type: Number,
  required: "Enter distance range"
  }
  });

},
{
  tooJSON:{
    virtuals: true
  }
}  
};

fitnessSchema.virtual("totalDuration").get(function() {
  return this.fitness.reduce((total, fitness) => {
    return total + fitness.duration;
  }, 0)
});



const Transaction = mongoose.model("Fitness", transactionSchema);

module.exports = Transaction;
