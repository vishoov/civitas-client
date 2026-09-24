import { useState } from "react";
import { createContext, useContext } from "react";

let AuthContext= createContext();

export const AuthProtected= ({children})=>{
    let [userData, setUserData]= useState(()=>{
        return JSON.parse(localStorage.getItem("user")) || {}
    });




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
            localStorage.setItem("user", JSON.stringify(data.user));
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
            console.log("User data after login: ", data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("token", data.token)
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


// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(){
    let result= useContext(AuthContext);
    if(!result)
        console.log("Error! beyond access ");

    return result;
}