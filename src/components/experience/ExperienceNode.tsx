import React from 'react'
import Layout from '@theme/Layout'
import { Experience } from '@site/src/interfaces/experience'

export function ExperienceNode({
  position,
  company,
  location,
  timeSpan,
  link = '',
  keyPoints
}: Experience): JSX.Element {
  return (
    <Layout>
      <main></main>
    </Layout>
  )
}
