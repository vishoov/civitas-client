import { use, useState } from "react";

const Login= ()=>{

    let [user, setUser]= useState(
        {
            name: "",
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
        alert("Logged In successfully")
    }

    return (
        <>
        <form  onSubmit={handleSubmit} className="border rounded-2xl  p-2 flex flex-col justify-center items-center gap-1 max-w-lg m-auto shadow-xl">

        <h1 className="text-center text-3xl p-2 ">Log In </h1>
            <div className="flex flex-col gap-1 text-left">

            <label htmlFor="name" className="text-sm text-gray-600">Name:</label>
            <input type="text" id="name" onChange={handleChange} value={user.name}
            className="border border-black rounded-md p-1 "/>
            </div>

          <div className="flex flex-col gap-1 text-left">

            <label htmlFor="emailInputContainer" className="text-sm text-gray-600">Email:</label>
            <input type="email" id="email" onChange={handleChange} value={user.email}
            className="border border-black rounded-md p-1 "/>
            </div>


            <div className="flex flex-col gap-1 text-left">

            <label htmlFor="password" className="text-sm text-gray-600">Password:</label>
            <input type="password" id="password"  onChange={handleChange} value={user.password}
            className="border border-black rounded-md p-1 "/>
            </div>


            <button type="submit" className="bg-black rounded-md m-2 text-white p-2 "> Login</button>

        {(status.success)?
        <p className="text-green-500">Logged In successfully</p>
        :<p className="text-red-500">Error: {status.error}</p>
        }
        </form>
        </>
    )
}



export default Login;