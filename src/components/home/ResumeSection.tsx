import Link from '@docusaurus/Link'
import React from 'react'
import { ResumeList } from '../resume/ResumeList'

export function ResumeSection(): JSX.Element {
  return (
    <section
      id="resume"
      className="hero dark:bg-dark bg-white py-4 mb-4 lg:px-0 px-5"
    >
      <div className="container">
        <h1 className="lg:text-4xl text-3xl text-left">Resume</h1>
        <div className="w-full mt-10">
          <ResumeList limit={3} />
        </div>
        <Link to="/resume" className="font-bold float-right">
          See more entries
        </Link>
      </div>
    </section>
  )
}
