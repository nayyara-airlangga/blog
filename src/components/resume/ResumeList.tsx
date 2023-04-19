import React from 'react'

import { ResumeNode } from './ResumeNode'
import { experiences } from '../../data/experience'

export interface ResumeListProps {
  limit?: number
}

export function ResumeList({ limit = 0 }: ResumeListProps): JSX.Element {
  const filteredExps =
    limit > 0
      ? limit < experiences.length
        ? experiences.slice(0, limit)
        : experiences
      : experiences
  return (
    <div className="my-6">
      {filteredExps.map((experience) => (
        <ResumeNode {...experience} />
      ))}
    </div>
  )
}
