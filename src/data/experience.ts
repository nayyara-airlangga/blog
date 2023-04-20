import { Experience } from '../interfaces/experience'

export const experiences: Experience[] = [
  {
    position: 'Technical Committee',
    company: 'DAD COMPFEST 15',
    timeSpan: 'Mar 2023 - Present',
    keyPoints: [
      'Designed an event-driven system using Redis Streams and Pub/Sub to process queries and submissions asynchronously.',
      ' Involved in designing the technical specifications and infrastructure for the project.',
      'Building a backend service with Go using Fiber framework, Postgres, and Redis.'
    ]
  },
  {
    position: 'Software Engineer',
    company: 'FINETIKS',
    timeSpan: 'Oct 2022 - Mar 2023',
    link: 'https://finetiks.com/',
    keyPoints: [
      'Built an internal console service from scratch using Nest.js and integration with other microservices and the mobile application.',
      'Built a CI/CD pipeline with Google Cloud Platform for the console service using Cloud Run, Cloud Build, and Cloud Registry.',
      'Handle 3 different backend services using Nest.js and MongoDB.'
    ]
  },
  {
    position: 'Software Engineer',
    company: 'SayaKaya',
    timeSpan: 'Jul 2022 - Oct 2022',
    link: 'https://sayakaya.id/',
    keyPoints: [
      'Refactored several microservices built in Rust and Node, optimizing business logic and processes.',
      'Handle the mutual fund service using Rust, Postgres, and integration with Pasardana API.'
    ]
  },
  {
    position: 'Software Engineer',
    company: 'COMPFEST 14',
    timeSpan: 'Apr 2022 - Nov 2022',
    link: 'https://compfest.id/',
    keyPoints: [
      'Implemented COMPFEST’s Talk Show Registration page and backend using Blitz.js and PostgreSQL.',
      'Involved in the development of COMPFEST’s Internal and User dashboards.',
      'Involved in integrating COMPFEST’s web application with its Nest.js backend service.'
    ]
  }
]
