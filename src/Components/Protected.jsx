import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../Auth/AuthContext"


const Protected= ()=>{
    let isAuth= useAuth();
    console.log(isAuth);

    if(isAuth)
        return <Outlet/>
    else
       return <Navigate to={"/login"} replace/>
}

export default Protected;