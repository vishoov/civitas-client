import { createContext, useContext } from "react";

let AuthContext= createContext();

export const AuthProtected= ({children})=>{

    let value= false;
    return (
        <AuthContext.Provider value= {value}>
            {children}
        </AuthContext.Provider>
    )
}


export function useAuth(){
    let result= useContext(AuthContext);
    if(!result)
        console.log("Error! beyond access ");

    return result;
}