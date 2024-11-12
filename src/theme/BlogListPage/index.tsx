import React from 'react'
import clsx from 'clsx'

import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames
} from '@docusaurus/theme-common'
import BlogLayout from '@theme/BlogLayout'
import BlogListPaginator from '@theme/BlogListPaginator'
import SearchMetadata from '@theme/SearchMetadata'
import type { Props } from '@theme/BlogListPage'
import BlogPostItems from '@theme/BlogPostItems'

function BlogListPageMetadata(props: Props): JSX.Element {
  const { metadata } = props
  const {
    siteConfig: { title: siteTitle }
  } = useDocusaurusContext()
  const { blogDescription, blogTitle, permalink } = metadata
  const isBlogOnlyMode = permalink === '/'
  const title = isBlogOnlyMode ? siteTitle : blogTitle
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  )
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props
  return (
    <BlogLayout sidebar={sidebar}>
      <div className="mb-3 flex flex-row gap-x-2">
        <img src="/img/favicon.svg" alt="Me" className="w-12 h-auto" />
        <h1 className="text-4xl mb-0">{metadata.blogTitle}</h1>
      </div>
      <p className="mb-3">{metadata.blogDescription}</p>
      <hr className="mt-0" />
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  )
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage
      )}
    >
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  )
}
