import Navbar from './Components/Navbar.jsx'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'
function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar/>
      <Hero/>
      <Projects />
      <Skills />
      <Contact/>
    </div>

  )
}
export default App