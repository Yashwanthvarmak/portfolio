function Hero() {
return(
    <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">
        Welcome to my portfolio
      </p>

      <h1 className="text-white text-6xl font-bold mb-6">
        Yashwanth <span className="text-blue-500">Varma</span>
      </h1>

      <p className="text-gray-400 text-xl mb-4">
        React Developer
      </p>

      <p className="text-gray-500 text-base max-w-xl mb-10">
        I build modern, scalable web applications with clean code and great user experiences
      </p>
      
      <div className="flex gap-4">
        <button 
        onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            View Projects
        </button>
        <button 
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        className="border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Contact Me
        </button>
      </div>
        </section>
)
}
export default Hero

