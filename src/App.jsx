import AdminDashboard from "./component/adminDashboard"
import Navbar from "./component/navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <div>
      <Navbar/>
      <AdminDashboard/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App