import React from 'react'
import { Experience } from '@site/src/interfaces/resume'

export function ResumeNode({
  position,
  company,
  location: _location,
  timeSpan,
  link = '',
  keyPoints
}: Experience): JSX.Element {
  return (
    <li className="list-none ml-1 border-solid border-0 border-l dark:border-gray-600 border-gray-400 -mt-4">
      <div className="-ml-1.5 w-3 h-3 rounded-full bg-primary inline-block mr-2.5" />
      <time className="leading-none text-base text-gray-600 dark:text-gray-400">
        {timeSpan}
      </time>
      <div className="ml-4">
        <h3 className="text-lg leading-none">
          {position}{' '}
          <a target="_blank" href={link} className="text-primary">
            @ {company}
          </a>
        </h3>
        <ul className="list-outside -mt-1 -ml-4">
          {keyPoints.map((point, i) => (
            <li key={point + i}>{point}</li>
          ))}
        </ul>
        <div className="py-2" />
      </div>
    </li>
  )
}
