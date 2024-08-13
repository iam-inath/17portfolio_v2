import React from 'react'
import { experience } from '../data/data'

function Experience() {
  return (
    <div id="experience" className="flex flex-col mb-20 md:flex-col lg:mb-40">
      <h2 className="mb-10 text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only">
        Experience
      </h2>
      {experience.map((position, index) => (
        <a
          href={position.companyURL}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <div className="relative transition-opacity duration-300 mb-14 lg:rounded-lg md:flex bg-slate-900 hover:bg-opacity-50">
            <h2 className="mb-2 mr-4 text-xs uppercase lg:w-1/4">
              {position.duration}
            </h2>
            <div className="lg:w-3/4">
              <h2 className="mb-1 font-medium leading-tight hover:text-secondary text-slate-200">
                {position.currentPosition} • {position.company} ➚
              </h2>
              <h2 className="text-sm leading-tight text-slate-500">
                {position.previousPositionOne}
              </h2>
              <h2 className="text-sm text-slate-500">
                {position.previousPositionTwo}
              </h2>
              <p className="my-3 text-sm leading-normal text-slate-400">
                {position.description}
              </p>
              <div className="flex flex-row flex-wrap justify-start gap-2">
                {position.products.map((product, productIndex) => (
                  <div key={productIndex}>
                    <a href={product.url}>
                      <h3 className="mb-3 text-sm capitalize text-slate-300">
                        ♾️ {product.name}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap justify-start gap-2 mb-5 wrap">
                {position.techStack.map((tech, techIndex) => (
                  <h3
                    key={techIndex}
                    className="flex items-center px-3 py-1 text-xs rounded-full bg-opacity-10 bg-secondary text-secondary"
                  >
                    {tech}
                  </h3>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
      <a
        href="#resume"
        className="mb-1 font-semibold leading-tight hover:text-secondary text-slate-200"
      >
        View Full Resumé ➚
      </a>
    </div>
  )
}

export default Experience
