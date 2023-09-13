const express = require('express')
const {createWorkout, deleteWorkout, getSingleWorkout, updateWorkout, getWorkouts}  = require('../controllers/workouts')
const router = express.Router()

router.route('/')
.get(getWorkouts)
.post(createWorkout)


router.route('/:id')
.get(getSingleWorkout)
.delete(deleteWorkout)
.patch(updateWorkout)

module.exports = router