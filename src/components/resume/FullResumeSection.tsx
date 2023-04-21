import React from 'react'
import { ResumeList } from './ResumeList'

export function FullResumeSection(): JSX.Element {
  return (
    <section
      id="resume"
      className="dark:bg-dark bg-white lg:py-16 py-8 lg:px-0 px-5"
    >
      <div className="container">
        <h1 className="lg:text-4xl text-3xl text-left">Resume</h1>
        <p className="leading-6 text-lg">A timeline of my work experience</p>
        <div className="w-full mt-10">
          <ResumeList />
        </div>
      </div>
    </section>
  )
}
