import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {siteConfig.tagline.split("\n").map((ln, idx) => <p id={idx} className="hero__subtitle">{ln}</p>)}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api/intro">
            Developer Knowledgebase
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <center>
          <img src="https://ref.zeith.org/images/species/main.webp" alt='Art of Zeitheron' />
        </center>
      </main>
    </Layout>
  );
}
