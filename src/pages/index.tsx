import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import { Hero } from '../components/home/Hero'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hi, I'm ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <main>
        <Hero />
      </main>
    </Layout>
  )
}
