import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { FeatureSection } from "./Feature";
import { DiscussionsSection } from "./Discussions";
import { PartnerSection } from "./Partner";
import { WhySection } from "./Why";
import { Download } from "./Download";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"A friendly crypto wallet"}
      description="A secure blockchain wallet that supports: APTOS, SUI, Ethereum, DApp, DeFi, and acts as your portal to the Web3 world"
    >
      <main>
        <div className={clsx(styles["hero-banner"], "container")} id="home">
          <div className="container">
            <div className="row">
              <div className="col-xl-11 col-lg-12 col-md-10 m-auto text-center">
                <h1 className={styles["hero-heading"]}>
                  The #1 <span style={{ color: "rgb(255, 0, 107)" }}>Web3</span>{" "}
                  <span style={{ color: "rgb(254, 220, 0)" }}>Omega</span>{" "}
                  Wallet
                </h1>
                <p className={clsx(styles["hero-sub-heading"], "m-auto")}>
                  A secure blockchain wallet that supports Aptos, SUI, EVM-based
                  and acts as your portal to the Web3 world.
                </p>

                <div>
                  <div className="block-download-links">
                    <Download />
                  </div>
                  <p className="text-center mt-24">
                    Look for integration?: <a href="/docs/intro">Getting Started</a>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles["screen-holder"]}>
              <img
                src="/img/hero/assets/screen_1.jpg"
                alt="screen"
                className={styles["img-meta"]}
              />
              <img
                src="/img/hero/assets/screen_3.png"
                alt="screen"
                className={clsx(styles["shapes"], styles["screen-one"])}
              />
              <img
                src="/img/hero/assets/screen_2.png"
                alt="screen"
                className={clsx(styles["shapes"], styles["screen-two"])}
              />
              <img
                src="/img/hero/shape/230.svg"
                alt="screen"
                className={clsx(styles["shapes"], styles["shape-one"])}
              />
              <img
                src="/img/hero/shape/231.svg"
                alt="screen"
                className={clsx(styles["shapes"], styles["shape-two"])}
              />
            </div>
            <img
              src="/img/hero/shape/232.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-three"])}
            />
            <img
              src="/img/hero/shape/233.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-four"])}
            />
            <img
              src="/img/hero/shape/234.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-five"])}
            />
            <img
              src="/img/hero/shape/235.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-six"])}
            />
            <img
              src="/img/hero/shape/236.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-seven"])}
            />
            <img
              src="/img/hero/shape/232.svg"
              alt="shape"
              className={clsx(styles["shapes"], styles["shape-eight"])}
            />
          </div>
        </div>
        <FeatureSection />
        <WhySection />
        <PartnerSection />
        <DiscussionsSection />
      </main>
    </Layout>
  );
}
