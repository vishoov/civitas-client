import { useState } from "react";

const Profile=()=>{

    let [user, setUser]= useState(JSON.parse(localStorage.getItem("user")))

    console.log(user)

    if(!user)
        return (
                <div>
                    No Data Found
                </div>)

    return (
        <div>
            <p className="text-white">Name: {user.username}</p>
            <p className="text-white">Email: {user.email} </p>
            <p className="text-white">Role: {user.role}</p>

        </div>
    )

}

export default Profile;