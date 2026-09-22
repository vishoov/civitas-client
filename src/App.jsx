import Login from "./Components/login"
import SignUp from "./Components/SignUp"
import { Route, Routes } from "react-router-dom"
import { AuthProtected } from "./Auth/AuthContext"
import AdminDashboard from "./component/adminDashboard"
import Navbar from "./component/navbar"
import ReportPage from "./component/reportPage"
import Footer from "./component/Footer"


import Home from "./pages/Home"
import Protected from "./Components/Protected"
const App = () => {
  return (
    <div>


      <Navbar/>

      <AuthProtected>
      <Routes>

        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/report" element={<ReportPage/>}/>
        <Route path="/admin/reports" element={
          <Protected>
            <AdminDashboard/>
          </Protected>
          }/>
        <Route path="/" element={<Home/>}/>
      </Routes>

      </AuthProtected>


    <Footer />

    </div>
  )
}

export default App