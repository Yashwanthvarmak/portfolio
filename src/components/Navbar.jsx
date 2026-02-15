function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800 fixed top-0 left-0 right-0 z-50 bg-gray-950">
      
      <h1 className="text-white text-xl font-bold">
        Yashwanth<span className="text-blue-500">.</span>
      </h1>

      <ul className="flex gap-8 text-gray-400 text-sm">
        <li onClick={() => scrollTo('home')} className="hover:text-white cursor-pointer transition-colors duration-300">Home</li>
        <li onClick={() => scrollTo('projects')} className="hover:text-white cursor-pointer transition-colors duration-300">Projects</li>
        <li onClick={() => scrollTo('skills')} className="hover:text-white cursor-pointer transition-colors duration-300">Skills</li>
        <li onClick={() => scrollTo('contact')} className="hover:text-white cursor-pointer transition-colors duration-300">Contact</li>
      </ul>

    </nav>
  )
}

export default Navbar