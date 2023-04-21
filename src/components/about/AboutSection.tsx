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
        <div className="w-full flex flex-col md:block mt-10">
          <img
            src={useBaseUrl('/img/me.png')}
            className="float-right mx-auto max-w-fit lg:pl-8 lg:pb-8 py-8"
          />
          <p>
            Hi there! My name is Angga and welcome to my personal space. My
            journey in IT started in early 2021 when I first decided Computer
            Science to be my university major. I started with{' '}
            <span className="text-primary">Mobile Development</span> and shifted
            into <span className="text-primary">Web Development</span>,
            particularly for <span className="text-primary">Frontend</span> as I
            entered university as my faculty has a lot of demand for frontend
            engineers to design event and project websites. As time went on my
            interest shifted more into{' '}
            <span className="text-primary">Backend</span>,{' '}
            <span className="text-primary">Cloud</span>,{' '}
            <span className="text-primary">DevOps</span>,{' '}
            <span className="text-primary">System Design</span>, and{' '}
            <span className="text-primary">Infrastructure</span>. I became
            interested in the business processes of a system and how to design
            robust and reliable infrastructure for said systems.
          </p>
          <p>
            I like to improve and gain a thorough understanding in my endeavors.
            I also have a high curiosity which pushes me to learn and experiment
            as much as possible. IT being an ever-evolving and incredibly vast
            field, it feels like I'm right where I belong as I always learn new
            things and that motivates me even more to explore all of it. Of
            course, if the opportunity presents itself, I might try and delve
            into other fields in the future.
          </p>
          <p>
            This site will be where I write my blog articles and share my
            projects. I like to pour my ideas and stories into words for others
            and myself to read. I also like to share what I've learned and
            writing articles on a blog is how I like to do it. It serves as a
            way for me to develop my thinking and to better express my thoughts
            into words. I also show my resume here to showcase my work
            experience, for good measure :D
          </p>
        </div>
      </div>
    </section>
  )
}
