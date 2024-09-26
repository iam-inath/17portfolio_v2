import React from 'react'
import { experience } from '../data/data'
import { downloads } from '/public/icons/icons'

function Experience() {
  return (
    <div id='experience' className='flex flex-col mb-20 md:flex-col lg:mb-40'>
      <h2 className='mb-10 text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only'>
        Experience
      </h2>
      {experience.map((position, index) => (
        <a
          href={position.companyURL && position.companyURL}
          target={position.companyURL && '_blank'}
          rel={position.companyURL && 'noopener noreferrer'}
          key={index}
        >
          <div className='relative transition-opacity duration-300 mb-14 lg:rounded-lg md:flex bg-slate-900 hover:bg-opacity-50'>
            <h2 className='mb-2 mr-4 text-xs uppercase md:w-1/5'>
              {position.duration}
            </h2>
            <div className='md:w-4/5'>
              <div className='flex items-center group'>
                <h2 className='mb-1 font-medium leading-tight group-hover:text-secondary text-slate-200'>
                  {position.currentPosition} • {position.company}
                  {'  '}
                </h2>
                <img
                  src={position.linkIcon}
                  height={20}
                  width={20}
                  className='mx-2 transition-transform duration-300 transform group-hover:scale-120 icon group-hover:icon-hover'
                />
              </div>
              <h2 className='text-sm leading-tight text-slate-500'>
                {position.previousPositionOne}
              </h2>
              <h2 className='text-sm text-slate-500'>
                {position.previousPositionTwo}
              </h2>
              <p className='my-2 text-sm leading-normal text-slate-400'>
                {position.description}
              </p>
              <div className='flex flex-row flex-wrap justify-start gap-2'>
                {position.products.map(
                  (product, productIndex) =>
                    product.name && (
                      <div key={productIndex}>
                        <a
                          href={product.url}
                          className='flex items-center my-2 group'
                          target='_blank'
                        >
                          <img
                            src={position.achievementIcon}
                            height={14}
                            width={14}
                            className='mr-1 transition-colors duration-100 icon icon-hover'
                          />
                          <h3 className='text-sm capitalize transition-colors duration-300 text-slate-300 group-hover:text-secondary'>
                            {product.name}
                          </h3>
                        </a>
                      </div>
                    )
                )}
              </div>

              <div className='flex flex-row flex-wrap justify-start gap-2 my-4 wrap'>
                {position.techStack.map((tech, techIndex) => (
                  <h3
                    key={techIndex}
                    className='flex items-center px-3 py-1 text-xs rounded-full bg-opacity-10 bg-secondary text-secondary'
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
        href='./cv/cv_nathankatshi.pdf'
        target='_blank'
        className='flex mb-1 font-semibold leading-tight group hover:text-secondary text-slate-200'
      >
        View Full Resumé{' '}
        <img
          src={downloads}
          height={16}
          width={20}
          className='ml-2 icon group-hover:icon-hover'
        />
      </a>
    </div>
  )
}

export default Experience
