import React from 'react'
import Layout from '@theme/Layout'
import { FullExperienceSection } from '@site/src/components/experience/FullExperienceSection'

export default function ExperiencePage(): JSX.Element {
  return (
    <Layout>
      <main>
        <FullExperienceSection />
      </main>
    </Layout>
  )
}
