import useBaseUrl from '@docusaurus/useBaseUrl'
import React from 'react'

export function AboutSection(): JSX.Element {
  return (
    <section
      id="about"
      className="hero dark:bg-dark bg-white lg:py-16 py-8 lg:px-0 px-5"
    >
      <div className="container">
        <h1 className="lg:text-4xl text-3xl text-left">About Me</h1>
        <div className="w-full">
          <img
            src={useBaseUrl('/img/me.png')}
            className="float-right max-w-fit lg:p-0 py-8"
          />
          <p>
            Hi there! My name is Angga. My journey in IT started in early 2021.
            I started with{' '}
            <span className="text-primary">Mobile Development</span> and shifted
            into <span className="text-primary">Web Development</span>,
            particularly for <span className="text-primary">Frontend</span> as I
            entered university as my faculty has a lot of demand for frontend
            engineers to design event and project websites. As time went on my
            interest shifted more into backend engineering, cloud, devops, and{' '}
          </p>
        </div>
      </div>
    </section>
  )
}
