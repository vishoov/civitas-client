import { useState } from "react";
import { createContext, useContext } from "react";

let AuthContext= createContext();

export const AuthProtected= ({children})=>{
    let [userData, setUserData]= useState(null);
    const register= async (state)=>{

        try{
            let rsps= await fetch("http://localhost:8000/api/users/register", 
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            username: state.name,
                            password: state.password,
                            age: state.age,
                            email: state.email
                        }
                    )
                }
            )
            let data= await rsps.json();
            console.log(data);
            
            if(!rsps.ok){
                console.log("Registration Unsuccessful!", data);
                return data
            }
            setUserData(data.user);

            return data;

        }
        catch(err){
            console.log(err.message);
        }

    }

    const login= async (state)=>{
         try{
            let rsps= await fetch("http://localhost:8000/api/users/login", 
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        state
                    )
                }
            )
            let data= await rsps.json();
            console.log(data);
            
            if(!rsps.ok){
                console.log("Registration Unsuccessful!", data);
                return data;
            }
            setUserData(data.user);

            return data;

        }
        catch(err){
            console.log(err.message);
        }
    }
    let value= {register, userData, login};
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