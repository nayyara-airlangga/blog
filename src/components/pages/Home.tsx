// For pages that can't be handled normally by Docusaurusimport React from 'react'
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import { Hero } from '../home'
import { Post } from '@site/src/interfaces/blog'
import { PageLayout } from '../PageLayout'

interface HomeProps {
  recentPosts: Post[]
}

export default function Home({ recentPosts }: HomeProps): JSX.Element {
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
