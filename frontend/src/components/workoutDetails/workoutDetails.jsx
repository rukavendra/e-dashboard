import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
    <div className='flex flex-col my-2 mx-auto p-2 bg-white w-[90%] md:w-[70%] '>
    <h3 className='font-bold text-xl text-green-500'>{workout.title}</h3>
    <h4><strong>Reps: </strong>{workout.reps}</h4>
    <h5><strong>Weight (Kg) :</strong> {workout.load} </h5>
    <p>{workout.createdAt}</p>
</div>
  )
}

export default WorkoutDetails