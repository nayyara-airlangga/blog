import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export function Hero() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section
      id="hero"
      className="hero dark:bg-dark bg-white text-center lg:py-16 py-8 lg:px-0 px-5 h-[90vh] mt-12 lg:mt-0"
    >
      <div className="container">
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-5xl leading-[1.5] text-left text-primary">
              Hi, I'm Angga
            </h1>
            <p className="text-2xl text-left">{siteConfig.tagline}</p>
            <div className="flex items-center justify-start">
              <Link
                className="button button--secondary button--lg bg-primary hover:bg-primary-darker border-none"
                to="/blog"
              >
                Read my blog
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
