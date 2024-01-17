// For pages that can't be handled normally by Docusaurusimport React from 'react'
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { Hero } from '../home'
import { PageLayout } from '../PageLayout'

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <PageLayout
      seo={{
        title: `Hi, I'm ${siteConfig.title}`,
        description: siteConfig.tagline
      }}
    >
      <Hero />
    </PageLayout>
  )
}
