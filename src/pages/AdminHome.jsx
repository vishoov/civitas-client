import AdminDashboard from "../Components/adminDashboard";
import Sidebar from "../Components/Sidebar"
import { useState} from "react";
import Profile from "./Profile";

const AdminHome = () => {

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col bg-slate-950 lg:flex-row">

    {/* sidebar */}
    <Sidebar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    />
   
    {/* conditional rendering to show profile, reports, settings  */}


  {activeTab === "reports" ? <AdminDashboard /> : <h1>No Active Tab</h1>}

  {activeTab === "profile" ? <Profile/> : <h1>No Active Tab</h1>}


    {/* current view  */}
    <main className="flex-1 px-6 py-8 text-slate-200">
    </main>


    </div>
  )
}

export default AdminHome