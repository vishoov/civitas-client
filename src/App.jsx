import Login from "./Components/login"
import SignUp from "./Components/SignUp"
import { Route, Routes } from "react-router-dom"
import { AuthProtected } from "./Auth/AuthContext"
import AdminDashboard from "./Components/adminDashboard"
import Navbar from "./Components/navbar"
import ReportPage from "./Components/reportPage"
import Footer from "./Components/Footer"


import Home from "./pages/Home"
import Protected from "./Components/Protected"
import AdminHome from "./pages/AdminHome"
import { NotFound } from "./Components/NotFound"
import { AllReports } from "./pages/AllReports"
const App = () => {
  return (
    <div>

      <AuthProtected>

      <Navbar/>

      <Routes>

        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/dashboard" element={<AdminHome />} />
        <Route path="/report" element={<ReportPage/>}/>
        <Route path='/reports' element={<AllReports />} />
        <Route path="/admin/reports" element={
          <Protected>
            <AdminDashboard/>
          </Protected>
          }/>
        <Route path="/" element={<Home/>}/>

        <Route path="*" element={<NotFound />} />


      </Routes>



    <Footer />
      </AuthProtected>

    </div>
  )
}

export default App