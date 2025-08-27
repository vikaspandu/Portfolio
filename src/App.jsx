import About from "./Components/About"
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills.jsx"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <main className="pt-16">
          {/* pt-16 ensures content isn’t hidden behind fixed navbar */}
          <Home />
          <About />
          <Skills />
          {/* 
          <Projects />
          <Education />
          <Contact /> */}
        </main>
      </div>
    </>
  )
}

export default App
