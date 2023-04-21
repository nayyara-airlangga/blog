import Head from '@docusaurus/Head'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'

interface PageLayoutProps {
  seo?: {
    title?: string
    description?: string
    image?: string
  }
  children?: React.ReactNode
}

export type { PageLayoutProps }

export function PageLayout({ seo, children }: PageLayoutProps): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  if (typeof seo === 'undefined') {
    seo = {
      title: siteConfig.title,
      description: siteConfig.tagline,
      image: useBaseUrl('/img/me.png')
    }
  } else {
    if (typeof seo.title === 'undefined') {
      seo.title = siteConfig.title
    }
    if (typeof seo.description === 'undefined') {
      seo.description = siteConfig.tagline
    }
    if (typeof seo.image === 'undefined') {
      seo.image = useBaseUrl('/img/me.png')
    }
  }

  return (
    <Layout title={seo.title} description={seo.description}>
      <Head>
        <meta itemProp="image" content={seo.image} />
        <meta property="og:image" content={seo.image} />
        <meta property="twitter:card" content={seo.image} />
        <meta property="twitter:image" content={seo.image} />
      </Head>
      <main>{children}</main>
    </Layout>
  )
}
