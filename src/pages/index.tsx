import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
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
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hi, I'm ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  )
}
