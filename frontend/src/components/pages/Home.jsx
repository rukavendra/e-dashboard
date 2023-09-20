import React, {useEffect,} from 'react'
import WorkoutDetails from '../workoutDetails/workoutDetails'
import Workoutform from '../forms/workoutform'
import { useWorkoutsContext } from '../../context/hooks/useWorkoutsContext'

const Home = () => {
    const {workouts,dispatch}= useWorkoutsContext()
    useEffect(()=>{
        fetch('/workouts')
        .then((res)=>res.json())
        .then(res=>{
                dispatch({type:'SET_WORKOUTS', payload: res})
        })
        .catch(err=>console.log(err))

    },[dispatch])
  return (<div className='flex flex-col md:flex-row-reverse'>
    <Workoutform/>
    <div className='home flex flex-col md:w-screen'>
        {workouts?
            (<div>
                {workouts.map(workout=>(
                   <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>)
            :<h3>Data Not Loaded</h3>
        }
    </div>
    </div>
  )
}

export default Home