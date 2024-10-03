import React, { useEffect, useState } from 'react'
import { sections } from '../data/data'

function Line({ isActive }) {
  return (
    <hr
      className={`w-10 h-[1px] mr-4 transition-all duration-300 border-none bg-slate-400 group-hover:w-20 group-hover:bg-slate-200 ${
        isActive ? 'w-20 bg-slate-200' : ''
      }`}
    ></hr>
  )
}

export default function Sections() {
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      const element = document.getElementById(section.href.replace('#', ''))
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
      sections.forEach((section) => {
        const element = document.getElementById(section.href.replace('#', ''))
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  return (
    <div className='max-lg:hidden lg:my-20'>
      {sections.map(
        (section) =>
          section.active && (
            <ul key={section.href}>
              <li
                className={`lg:my-4 group ${
                  currentSection === section.href.replace('#', '')
                    ? 'text-slate-200'
                    : ''
                }`}
              >
                <a
                  href={section.href}
                  className='text-xs font-semibold tracking-widest uppercase lg:justify-start lg:items-center lg:flex lg:my-6 hover:text-slate-200'
                  aria-current={
                    currentSection === section.href.replace('#', '')
                      ? 'page'
                      : undefined
                  }
                >
                  <Line
                    isActive={currentSection === section.href.replace('#', '')}
                  />
                  {section.label}
                </a>
              </li>
            </ul>
          )
      )}
    </div>
  )
}
