import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import clsx from 'clsx'

import styles from './Hero.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'

export function Hero() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section
      id="hero"
      className={clsx('hero hero--primary', styles.heroBanner)}
    >
      <div className="container">
        <div className={clsx(styles.heroItems)}>
          <div>
            <h1 className={clsx('hero__title', styles.heroTextPrimary)}>
              Hi, I'm Angga
            </h1>
            <p className={clsx('hero__subtitle', styles.heroText)}>
              {siteConfig.tagline}
            </p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--secondary button--lg',
                  styles.heroButtonPrimary
                )}
                to="/blog"
              >
                Read my blog
              </Link>
            </div>
          </div>
          <div>
            <img src={useBaseUrl('/img/me.png')} />
          </div>
        </div>
      </div>
    </section>
  )
}
