import { useAuthContext } from "../../../context/hooks/useAuthContext"

export const useLogout =()=>{
    const {dispatch}= useAuthContext()
    const logout =()=>{
        // remove token from storage
        localStorage.removeItem('user')
        
        //dispatch logout function
        dispatch({type:'LOGOUT'})
    }
    return {logout}
}