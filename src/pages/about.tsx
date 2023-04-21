import React from 'react'
import { AboutSection } from '../components/about/AboutSection'
import { TechStackSection } from '../components/about/TechStackSection'
import { PageLayout } from '../components/PageLayout'

export default function AboutPage(): JSX.Element {
  return (
    <PageLayout
      seo={{
        title: 'About'
      }}
    >
      <AboutSection />
      <TechStackSection />
    </PageLayout>
  )
}
