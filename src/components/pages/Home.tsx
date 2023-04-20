// For pages that can't be handled normally by Docusaurusimport React from 'react'
import React from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import { Hero, RecentPostsSection, ResumeSection } from '../home'
import { Post } from '@site/src/interfaces/blog'

interface HomeProps {
  recentPosts: Post[]
}

export default function Home({ recentPosts }: HomeProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hi, I'm ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <main>
        <Hero />
        <RecentPostsSection recentPosts={recentPosts} />
        <ResumeSection />
      </main>
    </Layout>
  )
}
