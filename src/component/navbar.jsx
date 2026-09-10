
const Navbar = ()=>{

    return(
        <div className="w-full bg-black h-15 flex justify-between py-3 px-10">
            <div className="text-white text-4xl font-bold">Civitas</div>

            <div className=" text-white gap-3 flex">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Services</div>
            </div>

            <div>
                <button className="bg-white rounded-2xl p-2 w-20">Login</button>
            </div>
        </div>
    )
}

export default Navbar