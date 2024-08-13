import React from 'react'
import { socialMedia } from '../data/data'

export default function Socials() {
  return (
    <div className="flex items-center justify-start gap-5 my-9">
      {socialMedia.map((icon, index) => (
        <a
          href={icon.href}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            className="w-6 h-6 svg-color hover:slate-200"
          />
        </a>
      ))}
    </div>
  )
}
