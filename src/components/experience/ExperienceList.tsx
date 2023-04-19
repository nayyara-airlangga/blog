import React from 'react'

import { ExperienceNode } from './ExperienceNode'
import { experiences } from '../../data/experience'

export interface ExperienceListProps {
  limit?: number
}

export function ExperienceList({
  limit = 0
}: ExperienceListProps): JSX.Element {
  const filteredExps =
    limit > 0
      ? limit < experiences.length
        ? experiences.slice(0, limit)
        : experiences
      : experiences
  return (
    <div className="my-6">
      {filteredExps.map((experience) => (
        <ExperienceNode {...experience} />
      ))}
    </div>
  )
}
