import React from 'react'
import { Icon } from '@iconify/react'

import { techStacks } from '@site/src/data/techstacks'

export function TechStackSection(): JSX.Element {
  return (
    <section
      id="technologies"
      className="hero dark:bg-dark bg-white lg:py-16 py-8 lg:px-0 px-5"
    >
      <div className="container">
        <h1 className="lg:text-4xl text-3xl text-left">
          Technologies I've used
        </h1>
        <div className="w-full mt-10">
          <ul className="list-inside p-0 gap-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {techStacks.map(({ name, icon }, i) => (
              <li
                key={name + i}
                className="flex gap-2 items-center text-primary"
              >
                {icon && <Icon fontSize={24} icon={icon} />}
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
