import { createContext} from 'react'

const WorkoutContext = createContext()

const WorkoutContextProvider=({children})=>{
    return( <WorkoutContext.Provider>
        {children}
    </WorkoutContext.Provider>)
}

export  { WorkoutContext, WorkoutContextProvider,}