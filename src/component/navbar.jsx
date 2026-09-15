import {Link} from 'react-router-dom'
const Navbar = ()=>{

    return(
        <div className="w-full bg-black h-15 flex justify-between py-3 px-10">
            <Link to="/" className="text-white text-4xl font-bold">Civitas</Link>

            <div className=" text-white gap-3 flex text-lg ">
                <Link to="/">Home</Link>
                <div>About</div>
                <div>Contact</div>
                <Link to="/report">Report</Link>
            </div>

            <div>
                <Link to="/login" className="bg-white rounded-2xl p-2 w-20  flex items-center text-center justify-center">Login</Link>
            </div>
        </div>
    )
}

export default Navbar