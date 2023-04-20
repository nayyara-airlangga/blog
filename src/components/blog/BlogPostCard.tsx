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
    <div className="mb-12">
      <Link to={metadata.permalink}>
        <h2 className="text-3xl text-primary">{metadata.title}</h2>
      </Link>
      <p className="leading-none text-sm">
        {metadata.formattedDate} · {Math.ceil(metadata.readingTime)} min read
      </p>
      <BlogPostContent />
      <div className="mb-12"></div>
      {metadata.tags.length > 0 && <Tags tags={metadata.tags} />}
      <Link to={metadata.permalink} className="font-bold float-right">
        Read More
      </Link>
    </div>
  )
}
