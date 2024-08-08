import Sections from './Sections'
import Socials from './Socials'
import About from './About'
import Identity from './Identity'

function Body() {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col mx-auto bg-slate-900 lg:container lg:fixed lg:flex-row lg:h-screen">
        <div className="lg:mx-0 flex-1 lg:flex lg:flex-col lg:justify-between lg:relative lg:top-0 lg:left-0 my-12 mx-6 sm:mx-12 lg:my-[110px] left-side lg:half-container">
          <div>
            <Identity />
            <Sections />
          </div>

          <Socials />
        </div>

        <div className="flex-1 lg:overflow-y-scroll  my-12 mx-6 sm:mx-12 lg:mt-[110px] lg:mx-0 right-side lg:half-container">
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
          <About />
        </div>
      </div>
    </div>
  )
}

export default Body
