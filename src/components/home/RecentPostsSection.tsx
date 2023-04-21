import React from 'react'
import Link from '@docusaurus/Link'
import { BlogPostProvider } from '@docusaurus/theme-common/internal'
import { Post } from '@site/src/interfaces/blog'
import { BlogPostCard } from '../blog/BlogPostCard'

interface RecentPostsSectionProps {
  recentPosts: Post[]
}

export function RecentPostsSection({
  recentPosts
}: RecentPostsSectionProps): JSX.Element {
  return (
    <section
      id="recent-posts"
      className="hero dark:bg-dark bg-white mt-12 mb-4 py-4 lg:px-0 px-5"
    >
      <div className="container">
        <h1 className="lg:text-4xl text-3xl text-left">Recent Posts</h1>
        <div className="w-full">
          {recentPosts.map(({ content: BlogPostContent }) => (
            <BlogPostProvider
              content={BlogPostContent}
              key={BlogPostContent.metadata.permalink}
            >
              <BlogPostCard
                key={BlogPostContent.metadata.permalink}
                content={BlogPostContent}
              />
            </BlogPostProvider>
          ))}
        </div>
        <Link to="/blog" className="font-bold float-right">
          See more posts
        </Link>
      </div>
    </section>
  )
}
