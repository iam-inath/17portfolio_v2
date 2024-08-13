import React from 'react'
import { person } from '../data/data'

function Identity() {
  const people = person.map((pers) => (
    <div key={pers.name}>
      <h1 className="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
        {pers.name}
      </h1>
      <h4 className="mt-3 mb-6 text-lg font-normal tracking-tight md:text-xl text-slate-100 lg:font-normal">
        {pers.position}
      </h4>
      <p className="text-slate-400">
        I build pixel-perfect, engaging, and <br /> accessible digital
        experiences.
      </p>
    </div>
  ))

  return <>{people}</>
}

export default Identity
