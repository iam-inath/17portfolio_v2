import React from 'react'

function Notes() {
  return (
    <div className="text-xs tracking-wide lg:text-xs">
      <p>
        Loosely designed in{' '}
        <a href="https://www.figma.com">
          <span className="text-slate-200 hover:text-secondary">Figma</span>{' '}
        </a>
        and coded in{' '}
        <a href="https://www.vscode.com">
          <span className="text-slate-200 hover:text-secondary">
            Visual Studio Code
          </span>
        </a>{' '}
        by yours truly. Built with
        <a href="https://www.react.dev">
          <span className="text-slate-200 hover:text-secondary"> React.js</span>
        </a>{' '}
        and{' '}
        <a href="https://www.tailwindcss.com">
          <span className="text-slate-200 hover:text-secondary">
            {' '}
            Tailwind CSS
          </span>
        </a>{' '}
        , deployed with
        <a href="https://www.netlify.com">
          {' '}
          <span className="text-slate-200 hover:text-secondary">Netlify</span>
        </a>{' '}
        . All text is set in the{' '}
        <a href="https://www.inter.com">
          <span className="text-slate-200 hover:text-secondary"> Inter</span>
        </a>{' '}
        typeface.
      </p>
      <p className="my-10 text-center">
        Copyright {new Date().getFullYear()} •{' '}
        <a href="https://www.katshi.dev">
          <span className="text-slate-200 hover:text-secondary">
            Katshi.dev
          </span>
        </a>{' '}
        • All Rights Reserved
      </p>
    </div>
  )
}

export default Notes
