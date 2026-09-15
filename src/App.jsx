import Login from "./Components/login"
import SignUp from "./Components/SignUp"
import { Route, Routes } from "react-router-dom"
import { AuthProtected } from "./Auth/AuthContext"
import AdminDashboard from "./component/adminDashboard"
import Navbar from "./component/navbar"
import ReportPage from "./component/reportPage"



import Home from "./pages/Home"
const App = () => {
  return (
    <div>


      <Navbar/>

      <AuthProtected>
      <Routes>

        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/report" element={<ReportPage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>

      </AuthProtected>


    

    </div>
  )
}

export default App