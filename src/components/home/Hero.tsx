import React from 'react'

import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export function Hero() {
  return (
    <section
      id="hero"
      className="hero dark:bg-dark bg-white text-center lg:py-16 py-8 lg:px-0 px-5 h-[90vh] mt-12 lg:mt-0"
    >
      <div className="container">
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-5xl leading-[1.5] text-left">
              Hi, I'm <span className="text-primary">Angga</span>
            </h1>
            <p className="text-xl text-left">
              I do work focused on <span className="text-primary">Data</span>
              {' '} and{' '}
              <span className="text-primary">Backend</span>.
              Occasionally, I also do{' '}
              <span className="text-primary">Full Stack</span> engineering.
            </p>
            <div className="flex flex-wrap items-center gap-8 gap-y-4 justify-start">
              <Link
                className="button button--lg bg-primary hover:bg-primary-darker border-solid border-[1px] border-transparent hover:text-white dark:hover:text-black"
                to="/blog"
              >
                Read my blog
              </Link>
              <Link
                className="button button--lg bg-transparent hover:bg-primary border-solid border-primary text-primary hover:text-white dark:hover:text-black border-[1px] transition duration-200"
                to="/about"
              >
                More about me
              </Link>
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            <img src={useBaseUrl('/img/me.png')} />
          </div>
        </div>
      </div>
    </section>
  )
}
