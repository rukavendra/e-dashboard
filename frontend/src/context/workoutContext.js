import { createContext, useReducer} from 'react'

const WorkoutContext = createContext()

export const workoutReducer = (state,action)=>{
    switch(action.type){
        case 'SET_WORKOUTS':
            return  {workouts: action.payload}

        case 'CREATE_WORKOUT':
            return {workouts: [action.payload,...state.workouts]}

        default:
            return state
    }

}

const WorkoutContextProvider=({children})=>{
    const [state, dispatch]= useReducer(workoutReducer,{workouts:null})
    return( <WorkoutContext.Provider value={{...state,dispatch}}>
        {children}
    </WorkoutContext.Provider>)
}

export  { WorkoutContext, WorkoutContextProvider,}