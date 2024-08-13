import ProjectList from '../components/ProjectList'

function ProjectsArchive() {
  return (
    <div className="w-full bg-slate-900 lg:fixed">
      <div className="container flex flex-col lg:relative lg:flex-row lg:h-screen">
        <ProjectList />
      </div>
    </div>
  )
}

export default ProjectsArchive
