import Sections from "../components/Sections";
import Socials from "../components/Socials";
import About from "../components/About";
import Identity from "../components/Identity";
import Experience from "../components/Experience";
import Notes from "../components/Notes";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";

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
          <Achievements />

          <Notes />
        </div>
      </div>
    </div>
  );
}

export default Body;
