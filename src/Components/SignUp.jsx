import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp=()=>{
     let [user, setUser]= useState(
            {
                email: "",
                password: "",
                age: ""
            }
        );

        let navigate= useNavigate();


        let [status, setStatus]= useState(
            {
                success: false,
                error: ""
            }
        );
   
    
    
        let handleChange= (e)=>{
            let {id, value}= e.target;
            setUser(val=>({
                ...val,
                [id]:value
            }))
        }
    
        let handleSubmit= (e)=>{
            e.preventDefault();
    
            console.log("Form Submitted !!")
    
            setStatus(prev=>(
                {
                    ...prev,
                    success: true
                }
            ))
            alert("Signed Up Successfully")

            navigate("/homepage")

            
        }
    
        return (
            <>
            <form  onSubmit={handleSubmit} className="border rounded-2xl  p-6 flex flex-col justify-center items-center gap-4 max-w-lg m-auto shadow-xl">

        <h1 className="text-center text-3xl p-2 ">Sign Up </h1>
            <div className="flex flex-col gap-1 text-left">

            <label htmlFor="name" className="text-sm text-gray-600">Name:</label>
            <input type="text" id="name" onChange={handleChange} value={user.name}
            className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 "/>
            </div>

             <div className="flex flex-col gap-1 text-left">

            <label htmlFor="age" className="text-sm text-gray-600">Age:</label>
            <input type="number" id="age" onChange={handleChange} value={user.age}
            className="border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 "/>
            </div>
            

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


            <button type="submit" className="bg-blue-600 rounded-md m-2 hover:bg-blue-700 text-white p-3 "> Sign Up</button>

        {(status.success)?
        <p className="text-green-500">✓Logged In successfully</p>
        :(status.error)&&<p className="text-red-500">⚠Error: {status.error}</p>
        }
        </form>
            </>
        )

}



export default SignUp;