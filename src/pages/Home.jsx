
function Home() {
  return (
    <>
    <div>
        <h1 className="text-4xl font-bold text-center mt-10">Welcome to Civitas</h1>
        <p className="text-center mt-5">Civitas is a platform that connects students with their peers, faculty, and the university community. It provides a space for students to engage in discussions, share resources, and collaborate on projects.</p>
        <div className="flex justify-center mt-10">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4">Get Started</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg">Learn More</button>
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="relative">
              <img src="https://images.unsplash.com/photo-1611270418597-a6c77f4b7271?q=80&w=698&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Civitas"
                className="w-full h-96 object-cover pd-4"
                />
        </div>
        <div className="relative">
          <img src="https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Civitas"
          className="w-full h-96 object-cover pd-4"
          />
        </div>
        <div className="relative">
            <img src="https://images.unsplash.com/photo-1683837422097-61216462a59f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Civitas"
            className="w-full h-96 object-cover pd-4"
            />
        </div>
    </div>
    </>
  )
}

export default Home