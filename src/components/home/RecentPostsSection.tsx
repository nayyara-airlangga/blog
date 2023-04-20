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
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="lg:w-1/2 w-full">
            <h1 className="lg:text-4xl text-3xl text-left">Recent Posts</h1>
          </div>
          <div className="lg:w-2/5 lg:block hidden"></div>
        </div>
        <div className="mt-4 flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="w-full lg:ml-5 ml-0">
            {recentPosts.map(({ content: BlogPostContent }) => (
              <BlogPostProvider content={BlogPostContent}>
                <BlogPostCard
                  key={BlogPostContent.metadata.permalink}
                  content={BlogPostContent}
                />
              </BlogPostProvider>
            ))}
          </div>
        </div>
        <Link to="/blog" className="font-bold float-right">
          See more posts
        </Link>
      </div>
    </section>
  )
}
