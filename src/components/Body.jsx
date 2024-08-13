import Sections from './Sections'
import Socials from './Socials'
import About from './About'
import Identity from './Identity'
import Experience from './Experience'
import Notes from './Notes'
import Projects from './Projects'

function Body() {
  return (
    <div className="w-full bg-slate-900 lg:fixed">
      <div className="container flex flex-col lg:relative lg:flex-row lg:h-screen">
        <div className="lg:mx-0 flex-1 lg:flex lg:flex-col lg:justify-between lg:top-0 lg:left-0 my-12 mx-6 sm:mx-12 lg:my-[100px] left-side lg:half-container">
          <div>
            <Identity />
            <Sections />
          </div>
          <Socials />
        </div>

        <div className="flex-1 lg:overflow-y-scroll my-12 mx-6 sm:mx-12 lg:mt-[100px] lg:mx-0 right-side lg:half-container">
          <About />
          <Experience />
          <Projects />
          <Notes />
        </div>
      </div>
    </div>
  )
}

export default Body
