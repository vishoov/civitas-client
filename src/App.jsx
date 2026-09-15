import AdminDashboard from "./component/adminDashboard"
import Navbar from "./component/navbar"
import ReportPage from "./component/reportPage"


import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <div>
      <Navbar/>


      <Routes>
        <Route path="/report" element={<ReportPage/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App