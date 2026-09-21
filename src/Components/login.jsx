import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Login= ()=>{
    let navigate= useNavigate();
    let [user, setUser]= useState(
        {
            email: "",
            password: ""
        }
    );

    let [status, setStatus]= useState(
        {
            success: false,
            error: ""
        }
    );
    let {isAuthenticated, login} = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
            navigate('/admin',{replace: true});
        }
    },[isAuthenticated, navigate]);

    let handleChange= (e)=>{
        let {id, value}= e.target;
        setUser(val=>({
            ...val,
            [id]:value
        }))
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(!user.email || !user.password){
            setStatus({
                success: false,
                error: "Please enter email and password"
            });
            return;
        }
        try{
            let status = await login(user.email, user.password);
            console.log("Login result:", status);
            if(status){
                setStatus({
                    success: true,
                    error: ""
                })
                console.log("User Authenticated successfully");
                navigate('/admin', {replace: true});
            }else{
                setStatus({
                    success: false,
                    error: "Invalid error or password"
                })
            }
        }catch(err){
            console.error("Login error: ", err);
            setStatus({
                success: false,
                error: err.message || "Login failed"
            })
        }
    }

    return (
        <>
        <form  onSubmit={handleSubmit} className="border rounded-2xl  p-6 flex flex-col justify-center items-center gap-4 max-w-lg m-auto shadow-xl">

        <h1 className="text-center text-3xl p-2 ">Log In </h1>
          <div className="flex flex-col gap-1 text-left">

            <label htmlFor="email" className="text-sm text-gray-600">Email:</label>
            <input type="email" id="email" onChange={handleChange} value={user.email}
            className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            </div>


            <div className="flex flex-col gap-1 text-left">

            <label htmlFor="password" className="text-sm text-gray-600">Password:</label>
            <input type="password" id="password"  onChange={handleChange} value={user.password}
            className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"/>
            </div>


            <button type="submit" className="bg-blue-600 rounded-md m-2 hover:bg-blue-700 text-white p-3 "> Login</button>

        {(status.success)?
        <p className="text-green-500">✓Logged In successfully</p>
        :(status.error)&&<p className="text-red-500">⚠Error: {status.error}</p>
        }
        </form>
        </>
    )
}



export default Login;