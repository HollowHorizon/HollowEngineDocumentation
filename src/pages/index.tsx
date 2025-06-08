import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className={styles.heroBackground}/>
            <div className="container">
                <Heading as="h1" className={styles.heroTitle}>
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Открыть документацию
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const location = useLocation();
    const history = useHistory();

    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>

        </Layout>
    );
}
