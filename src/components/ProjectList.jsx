import React, { useState, useEffect } from 'react'
import { projects } from '../data/data'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { leftArrow, backButton, externalLink } from '../../public/icons/icons'

function ProjectList() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.sticky-header')
      if (header) {
        if (window.scrollY > header.offsetTop) {
          header.classList.add('stuck')
        } else {
          header.classList.remove('stuck')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 640)
  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth < 640)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='container max-lg:mt-[50px] lg:mt-[100px] right-side '>
      <div className='h-screen mx-6 sm:mx-12 lg:mx-0'>
        <a href='/' className='flex items-center group'>
          <img
            src={backButton}
            height={20}
            width={20}
            className='mr-2 icon-secondary group-hover:icon-hover'
          />
          <Link to='/' className='text-lg tracking-tight text-secondary'>
            Nathan Katshi
          </Link>
        </a>
        <h1 className='mt-2 mb-10 text-4xl font-bold tracking-tight md:text-5xl text-slate-200'>
          All Projects
        </h1>

        <div className='table-container'>
          <table className='w-full text-slate-300 mb-[100px]'>
            <thead className='sticky-header'>
              <tr>
                <th className='py-2 pr-3 mb-5 text-sm text-left align-top'>
                  Year
                </th>
                <th className='py-2 mb-5 text-sm text-left align-top'>
                  Project
                </th>
                <th className='py-2 mb-5 text-sm text-left align-top max-lg:hidden'>
                  Made at
                </th>
                <th className='py-2 mb-5 text-sm text-left align-top max-lg:hidden'>
                  Built with
                </th>
                <th className='py-2 mb-5 text-sm text-left align-top '>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className='border-b border-slate-800'>
                  <td className='py-4 text-sm align-top ali lg:pb-6 text-slate-400'>
                    {project.year}
                  </td>
                  <td className='flex py-4 font-semibold align-top text-md max-sm:hover:text-secondary lg:pb-6'>
                    {project.name}{' '}
                    {smallScreen && (
                      <i class='fa fa-external-link' aria-hidden='true'></i>
                    )}
                  </td>
                  <td className='py-4 pb-6 text-sm align-top max-lg:hidden text-slate-400'>
                    {project.company}
                  </td>
                  <td className='py-4 align-top lg:pb-6 max-lg:hidden lg:w-1/3'>
                    <ul className='flex flex-wrap gap-2'>
                      {project.techUsed.map((tech, index) => (
                        <li
                          key={index}
                          className='px-4 py-1 text-xs rounded-full bg-opacity-10 bg-secondary text-secondary'
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className='py-4 align-top lg:pb-7'>
                    <a
                      href={project.url}
                      className='flex items-center text-sm font-semibold group hover:text-secondary text-slate-300'
                    >
                      {project.label}
                      <img
                        src={externalLink}
                        height={20}
                        width={20}
                        className='ml-2 transition-colors duration-100 icon group-hover:icon-hover'
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
