import Sidebar from "./components/Sidebar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Projects from "./sections/Projects"


function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <section className="w-full">
          <Home />
          <About />
          <Projects />
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App
