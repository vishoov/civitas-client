import { createContext, useContext, useState } from "react";

let AuthContext= createContext(null);

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuth] = useState(false);
    const [user, setUser] = useState(()=>{
        const extracted = localStorage.getItem("user");
        if(extracted){
            setIsAuth(true);
            return JSON.parse(extracted);
        }else{
            return null;
        }
    });

    const updateUser = (user) => {
        setUser(user);
    }

    const login = async (email, password) => {
        const response = await fetch("http://localhost:8000/api/users/login",{
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        });
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message || "User not logged in");
        }
        console.log(data);
        setUser(data.user);
        if(data.token){
            localStorage.setItem("token", data.token);
        }
        localStorage.setItem("user", JSON.stringify(data.user));
        setIsAuth(true);
        return true;
    }

    const logout = () => {
        setIsAuth(false);
        setUser(null);
        localStorage.removeItem("user");
    }
    let value= {
        user,
        login,
        logout,
        isAuthenticated,
        updateUser
    };
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