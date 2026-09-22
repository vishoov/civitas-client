import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"


const Protected= ()=>{
    let { userData }= useAuth();
    console.log(userData);

    if(userData)
        return <Outlet/>
    else
       return <Navigate to={"/login"} replace/>
}

export default Protected;