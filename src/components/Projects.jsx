import React from 'react'
import { projects } from '../data/data'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div id="projects" className="flex flex-col mb-20 md:flex-col lg:mb-40">
      <h2 className="mb-10 text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
        Projects
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative transition-opacity duration-300 mb-14 lg:rounded-lg md:flex bg-slate-900 hover:bg-opacity-50"
        >
          <div className="mb-2 text-xs uppercase lg:w-1/4">
            <Link to={project.url}>
              <img src={project.src} alt={project.name} />
            </Link>
            thumbnail
          </div>
          <div className="lg:w-3/4">
            <h2 className="mb-1 font-medium leading-tight hover:text-secondary text-slate-200">
              {project.name} ➚
            </h2>
            <p className="my-3 text-sm leading-normal text-slate-400">
              {project.description}
            </p>
            <div className="flex flex-row flex-wrap justify-start gap-2">
              <h3 className="mb-3 text-sm capitalize text-slate-300">
                ♾️ {project.achievements}
              </h3>
            </div>
            <div className="flex flex-row flex-wrap justify-start gap-2 mb-5 wrap">
              {project.techUsed.map((tech, index) => (
                <h3
                  key={index}
                  className="flex items-center px-3 py-1 text-xs rounded-full bg-opacity-10 bg-secondary text-secondary"
                >
                  {tech}
                </h3>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Link
        to="/project-archive"
        className="mb-1 font-semibold leading-tight hover:text-secondary text-slate-200"
      >
        View Full Project Archive ➚
      </Link>
    </div>
  )
}

export default Projects
