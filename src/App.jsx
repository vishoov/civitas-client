import Login from "./Components/login"
import SignUp from "./Components/SignUp"
import { Route, Routes } from "react-router-dom"
import Homepage from "./Components/homepage"
import Protected from "./Components/Protected"
import { AuthProtected } from "./Auth/AuthContext"
import { Dashboard } from "./Components/Dashboard"


const App = () => {
  return (
    <div>
      <h1>CIVITAS Home page!!</h1>


      <AuthProtected>
      <Routes>
        <Route element={<Protected/>} >
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="*" element={<Homepage />} />
      </Routes>

      </AuthProtected>
    </div>
  )
}

export default App