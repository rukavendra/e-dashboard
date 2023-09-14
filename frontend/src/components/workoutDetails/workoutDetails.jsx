import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div>
    <h3>{workout.title}</h3>
    <h4><strong>Reps: </strong>{workout.reps}</h4>
    <h5><strong>Weight (Kg) :</strong> {workout.load} </h5>
    <p>{workout.createdAt}</p>
</div>
  )
}

export default WorkoutDetails