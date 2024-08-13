import React from 'react'
import { projects } from '../data/data'
import { Link } from 'react-router-dom'

function ProjectList() {
  return (
    <div>
      <Link to="/" className="text-secondary">
        Nathan Katshi
      </Link>
      <h1 className="text-6xl font-bold text-slate-200">All Projects</h1>
      <div>
        <ul className="flex gap-4 text-slate-200">
          <li>Year</li>
          <li>Project</li>
          <li>Made at</li>
          <li>Build with</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectList
