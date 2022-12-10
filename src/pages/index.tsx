import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <section id="hero">
          <div className="container">
            <div className={styles.content}>
              <h1 className={styles.heading}>The Omega Wallet</h1>
              <h2 className={styles.subHeading}>
                A secure blockchain wallet that supports: APTOS, SUI, Ethereum,
                DApp, DeFi, and acts as your portal to the Web3 world.
              </h2>
              <p className={styles.description}>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Omega Wallet
                </Link>{" "}
                makes it safe & easy for you to store, buy, send, receive, swap
                tokens and collect NFTs on the Aptos/SUI/ Ethereum blockchain.
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  href="/docs/intro"
                >
                  Getting Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
