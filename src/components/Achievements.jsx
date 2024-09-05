import React from 'react'
import { achievements } from '../data/data'
import { Link } from 'react-router-dom'
import { downloads, eye, externalLink } from '/public/icons/icons'

function Achievements() {
  return (
    <div id='achievements' className='flex flex-col mb-20 md:flex-col lg:mb-40'>
      <h2 className='mb-10 text-sm font-bold tracking-widest uppercase text-slate-200 lg:sr-only'>
        Achievements
      </h2>
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className='relative flex mb-10  lg:p-5 transition-all lg:hover:!opacity-100 lg:group-hover:opacity-50 rounded lg:hover:cursor-pointer lg:hover:border-slate-200/30 group  lg:rounded-lg max-md:flex-col md:flex-row-reverse bg-slate-900 hover:bg-opacity-50'
        >
          <div className='md:w-3/4'>
            <a
              href={achievement.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center '
            >
              <h2 className='mb-1 font-medium leading-tight group-hover:text-secondary text-slate-200'>
                {achievement.name}
              </h2>
              <img
                src={externalLink}
                height={20}
                width={20}
                className='ml-2 icon group-hover:icon-hover'
              />
            </a>

            <p className='my-3 text-sm leading-normal text-slate-400'>
              {achievement.description}
            </p>
            <div className='flex flex-row flex-wrap justify-start gap-2'>
              {achievement.achievements ? (
                <a
                  href={achievement.url}
                  className='flex items-center mb-3 group'
                >
                  <img
                    src={achievement.achievementIcon}
                    height={20}
                    width={20}
                    className='mr-2 transition-colors duration-100 icon'
                    style={{
                      filter:
                        'invert(88%) sepia(7%) saturate(0%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                    }}
                  />
                  <h3 className='text-sm capitalize transition-colors duration-300 text-slate-300'>
                    {achievement.achievements}
                  </h3>
                </a>
              ) : (
                ''
              )}
            </div>
            <div className='flex flex-row flex-wrap justify-start gap-2 mt-1 mb-5 wrap'>
              {achievement.techUsed.map((tech, index) => (
                <h3
                  key={index}
                  className='flex items-center px-3 py-1 text-xs rounded-full bg-opacity-10 bg-secondary text-secondary'
                >
                  {tech}
                </h3>
              ))}
            </div>
          </div>
          <div className='mb-2 mr-4 text-xs uppercase max-md:w-1/2 md:w-1/4'>
            <a href={achievement.url} target='_blank' rel='noopener noreferrer'>
              <img
                src={achievement.src}
                loading='lazy'
                alt={achievement.name}
                className='transition h-[84px] w-[200px] border-2 rounded border-slate-200/10 hover:border-slate-200/30 max-md:w-1/2 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 lg:h-auto lg:w-full'
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Achievements
