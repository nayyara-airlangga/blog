import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { Hero, ResumeSection } from '../components/home';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hi, I'm ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <main>
        <Hero />
        <ResumeSection />
      </main>
    </Layout>
  );
}
