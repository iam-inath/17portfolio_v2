import React from 'react'
import { socialMedia } from '../data/data'

export default function Socials() {
  return (
    <div className="flex  gap-5 my-9 lg:mt-[200px]">
      {socialMedia.map((icon, index) => (
        <a href={icon.href} target="_blank">
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: icon.svg }}
            className="w-6 h-6 svg-color hover:opacity-70"
          />
        </a>
      ))}
    </div>
  )
}
