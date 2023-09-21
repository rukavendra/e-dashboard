import React from 'react'
import { useWorkoutsContext } from '../../context/hooks/useWorkoutsContext'

const WorkoutDetails = ({workout}) => {
  const {dispatch}= useWorkoutsContext()

  const handleDelete= async()=>{
    const response = await fetch(`/workouts/${workout._id}`,{method:"DELETE"})
    const json = await response.json()
    if(response.ok){
      dispatch({type:'DELETE_WORKOUT',payload:json})
    }
  }

  const handleUpdate= ()=>{}

  return (<div className='flex justify-between items-center my-2 mx-auto p-2 bg-white w-[90%] md:w-[70%]'>
    <div className='flex flex-col  '>
    <h3 className='font-bold text-xl text-green-500'>{workout.title}</h3>
    <h4><strong>Reps: </strong>{workout.reps}</h4>
    <h5><strong>Weight (Kg) :</strong> {workout.load} </h5>
    <p>{workout.createdAt}</p>
</div>
<div className='flex flex-col gap-1'>
<button className=' hover:bg-black hover:bg-opacity-50 py-1 px-2 rounded' onClick={handleDelete}>❌</button>
  <button className=' hover:bg-black hover:bg-opacity-50 py-1 px-2 rounded' onClick={handleUpdate}>✒️</button>
</div>
  
</div>
  )
}

export default WorkoutDetails