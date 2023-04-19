import React from 'react'
import Layout from '@theme/Layout'
import { FullResumeSection } from '@site/src/components/resume'

export default function ResumePage(): JSX.Element {
  return (
    <Layout>
      <main>
        <FullResumeSection />
      </main>
    </Layout>
  )
}
