import { useAuth } from "./Auth"
import { useHistory } from "react-router-dom";

export const RequiredAuth=({children})=>
{

    const history=useHistory();

    // useAuth is taking this-> function and storing it in auth export const useAuth=()=>{return useContext(AuthContext); }
    // useContext(AuthContext) is written to share the state var. among different components as it contains {user,login,an logout} in Auth.js
    const auth=useAuth();

    // if there is no user in state variable then it will redirect to login page....
    if(!auth.user)
    {
        return  history.push("/login")

    }
    
    
    
    // else it will return the children...
    return children;
}