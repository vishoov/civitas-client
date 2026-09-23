import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Settings.css';

const Settings = ({userId}) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleDeactivate = async ()=> {
        try{
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api/users/${userId}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({isActive: false})
            });

            const data = await response.json();
            if(!response.ok){
                throw new Error(data.message || "Failed to deactivate account");
            }
            console.log("Account deactivated successfully");
            navigate('/login');
        }catch(err){
            console.error(err);
            alert(err.message);
        }finally{
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        try {
            const response = await fetch(
                "http://localhost:8000/api/users/logout",
                {
                    method: "POST",
                    credentials: "include"
                }
            );
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message);
            }

            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className="settings-page">
            <div className="settings-card">
                <div className="settings-header">
                    <h1>Settings</h1>
                    <p>Manage your account settings</p>
                </div>
                <div className="settings-section">
                    <h2>Account</h2>
                    <div className="settings-option">
                        <div className="option-info">
                            <h3>Sign Out</h3>
                            <p>Sign out off your account on this device</p>
                        </div>
                        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
                    </div>
                    <div className="settings-divider"></div>

                    <div className="settings-option">
                        <div className="option-info">
                            <h3>Deactivate Account</h3>
                            <p>Deactivate your account and prevent access until it is reactivated</p>
                        </div>
                        <button className="deactivate-btn" onClick={handleDeactivate} disabled={loading}>{loading?"Deactivating...":"Deactivate Account"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;