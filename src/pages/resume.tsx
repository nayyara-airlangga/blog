import React from 'react'
import { FullResumeSection } from '@site/src/components/resume'
import { PageLayout } from '../components/PageLayout'

export default function ResumePage(): JSX.Element {
  return (
    <PageLayout
      seo={{
        title: 'Resume',
        description: 'A timeline of my work experience up until now.'
      }}
    >
      <FullResumeSection />
    </PageLayout>
  )
}
