const router = require("express").Router();
const Fitness = require("../models/fit-plan.js");

router.post("/api/fitness", ({ body }, res) => {
  Exercise.create(body)
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", ({ body, params }, res) => {
  Exercise.findByIdAndUpdate(
  params.id,
  {$push:{exercises: body}},
  {new: true, runValidators: true}  
  )
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workout/range", (req, res) => {
  Workout.find().limit(10)
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);


    });
    router.delete("/api/workout/", ({body}, res) => {
      Workout.findByIdAndDelete(body.id)
      .then(dbFitness => {
        res.json(dbFitness);
      })
      .catch(err => {
        res.status(400).json(err);
      });
       
        
});
}
module.exports = router;


