import React from 'react'

import { Content } from '@theme/BlogPostPage'
import Link from '@docusaurus/Link'
import { Tags } from './Tags'

interface BlogPostCardProps {
  content: Content
}

export function BlogPostCard({
  content: BlogPostContent
}: BlogPostCardProps): JSX.Element {
  const { metadata } = BlogPostContent
  return (
    <article className="mb-12">
      <Link to={metadata.permalink}>
        <h2 className="text-3xl text-primary">{metadata.title}</h2>
      </Link>
      <p className="leading-none text-sm">
        <time>
          {metadata.formattedDate} · {Math.ceil(metadata.readingTime)} min read
        </time>
      </p>
      <BlogPostContent />
      <div className="mb-12" />
      {metadata.tags.length > 0 && <Tags tags={metadata.tags} />}
    </article>
  )
}
