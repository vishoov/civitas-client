import AdminDashboard from "../Components/adminDashboard";
import Sidebar from "../Components/Sidebar"
import { useState} from "react";
import Profile from "./Profile";

const AdminHome = () => {

  const [activeTab, setActiveTab] = useState("profile");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "settings":
        return <h1>Settings</h1>
      case "reports":
        return <AdminDashboard />
      default:
        return <Profile />
    }
  }

  return (
    <div className="flex flex-col bg-slate-950 lg:flex-row">

    {/* sidebar */}
    <Sidebar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    />
   
    {/* current view  */}
    <main className="flex-1 px-6 py-8 text-slate-200">
      {renderActiveTab()}
    </main>


    </div>
  )
}

export default AdminHome