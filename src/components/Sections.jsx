import React from 'react'
import { sections } from '../data/data'

export default function Sections() {
  return (
    <div className=" max-lg:hidden lg:my-20">
      {sections.map((section) => (
        <ul>
          <li className="lg:my-4 hover:text-slate-200">
            <a
              href={section.href}
              className="text-xs font-semibold tracking-widest uppercase lg:my-6 hover:text-slate-200"
            >
              ______{section.label}
            </a>
          </li>
        </ul>
      ))}
    </div>
  )
}
