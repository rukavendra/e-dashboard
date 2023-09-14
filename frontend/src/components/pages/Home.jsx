import React, {useEffect, useState} from 'react'
import WorkoutDetails from '../workoutDetails/workoutDetails'

const Home = () => {
    const [workouts, setWorkouts]= useState(null)
    useEffect(()=>{
        fetch('/workouts')
        .then((res)=>res.json())
        .then(res=>{
                setWorkouts(res)
        })
        .catch(err=>console.log(err))

    },[])
  return (
    <div className='home'>
        <h2>Home</h2>
        {workouts?
            (<div>
                {workouts.map(workout=>(
                   <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>)
            :<h3>Data Not Loaded</h3>
        }
    </div>
  )
}

export default Home