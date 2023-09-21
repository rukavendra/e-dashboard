const Workout = require("../models/workouts");

// creating workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const result = await Workout.create({
      title,
      reps,
      load,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// getting all workouts
const getWorkouts = async (req, res) => {
  try {
    const results = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// getting single workout
const getSingleWorkout = async (req, res) => {
    const searchId = req.params.id
  try {
    const results = await Workout.findById(searchId);
    if(!results) return res.status(400).json({error: "No such workout "})
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// deleting workout
const deleteWorkout = async (req, res) => {
    const searchId = req.params.id
  try {
    const results = await Workout.findOneAndDelete(searchId);
    if(!results) return res.status(400).json({error: "No such workout "})
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// updating workout 
const updateWorkout = async (req, res) => {
    const searchId = req.params.id
  try {
    const results = await Workout.findOneAndUpdate({_id: searchId},{...req.body});
    if(!results) return res.status(400).json({error: "No such workout "})
    res.status(200).json({message: `workout updated`});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createWorkout, getWorkouts, deleteWorkout, updateWorkout, getSingleWorkout };


//  