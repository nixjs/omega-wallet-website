import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import clsx from "clsx";

export default function Home(): JSX.Element {
  return (
    <Layout
      title={"A friendly crypto wallet"}
      description="A secure blockchain wallet that supports: APTOS, SUI, Ethereum, DApp, DeFi, and acts as your portal to the Web3 world"
    >
      <main>
        <section id="hero">
          <div className="container">
            <div className={styles.content}>
              <div className="row">
                <div className="col-md-10 m-auto text-center">
                  <h1 className={styles.heading}>
                    The <span>OMEGA</span> Wallet
                  </h1>
                  <h2 className={styles.subHeading}>
                    A secure blockchain wallet that supports{" "}
                    <span className={styles.highlightRed}>Aptos</span>,{" "}
                    <span className={styles.highlightYellow}>SUI</span>,{" "}
                    <span className={styles.highlightYellow}>EVM-based</span>{" "}
                    and acts as your portal to the Web3 world.
                  </h2>
                </div>
              </div>
              {/* <p className={styles.description}>
                A secure blockchain wallet that supports Aptos, SUI, EVM-based
                and acts as your portal to the Web3 world.
              </p> */}
              <div className={styles.buttons}>
                <div className="block-download-links">
                  <div className="row">
                    <div className="col-lg-offset-3 col-lg-6 col-offset-sm-0 col-sm-12">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                          <div
                            className={clsx(
                              "d-flex flex-column justify-content-center ml-16 mr-16 mb-24",
                              styles.blockBrowser
                            )}
                          >
                            <img
                              src="/img/browsers/chrome.png"
                              alt="Chrome"
                              width="64"
                              className={styles.imageBrowser}
                            />
                            <a
                              href="https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak"
                              className="button button--primary button--sm mt-24"
                              target="_blank"
                            >
                              <span className="button-text">Chrome</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                          <div
                            className={clsx(
                              "d-flex flex-column justify-content-center ml-16 mr-16 mb-24",
                              styles.blockBrowser
                            )}
                          >
                            <img
                              src="/img/browsers/firefox.png"
                              alt="Firefox"
                              width="64"
                              className={styles.imageBrowser}
                            />
                            <a
                              href="https://addons.mozilla.org/en/firefox/addon/omegawallet/"
                              className="button button--primary button--sm mt-24"
                              target="_blank"
                            >
                              <span className="button-text">Firefox</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                          <div
                            className={clsx(
                              "d-flex flex-column justify-content-center ml-16 mr-16 mb-24",
                              styles.blockBrowser
                            )}
                          >
                            <img
                              src="/img/browsers/brave.png"
                              alt="Brave"
                              width="64"
                              className={styles.imageBrowser}
                            />
                            <a
                              href="https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak"
                              className="button button--primary button--sm mt-24"
                              target="_blank"
                            >
                              <span className="button-text">Brave</span>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                          <div
                            className={clsx(
                              "d-flex flex-column justify-content-center ml-16 mr-16 mb-24",
                              styles.blockBrowser
                            )}
                          >
                            <img
                              src="/img/browsers/ms-edge.png"
                              alt="MS Edge"
                              width="64"
                              className={styles.imageBrowser}
                            />
                            <a
                              href="https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak"
                              className="button button--primary button--sm mt-24"
                              target="_blank"
                            >
                              <span className="button-text">MS Edge</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-24">
                  For Developer: <Link href="/docs/intro">Getting Started</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="trust" className={styles.trust}>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2 className={styles.heading}>
                    Check why you <span>Should</span> Choose us
                  </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-50 md-pt-20">
              <div className="col-lg-4 col-md-6">
                <div className={clsx(styles.block, "mt-24")}>
                  <div
                    className={clsx(
                      styles.blockIcon,
                      "d-flex align-items-center justify-content-center"
                    )}
                  >
                    <img src="/img/hero/78.svg" alt="icon" />
                  </div>
                  <div className="static-text">
                    <h3 className={clsx(styles.blockHeading, "mb-0")}>
                      Non-custodial
                    </h3>
                    <p className="mb-0">
                      The private keys are encrypted, stored securely on your
                      device, and never left it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={clsx(styles.block, "mt-24")}>
                  <div
                    className={clsx(
                      styles.blockIcon,
                      "d-flex align-items-center justify-content-center"
                    )}
                  >
                    <img src="/img/hero/79.svg" alt="icon" />
                  </div>
                  <div className="static-text">
                    <h3 className={clsx(styles.blockHeading, "mb-0")}>
                      Tracking nothing
                    </h3>
                    <p className="mb-0">
                      We respect your data ownership. Avoiding data leaks from
                      the source.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className={clsx(styles.block, "mt-24")}>
                  <div
                    className={clsx(
                      styles.blockIcon,
                      "d-flex align-items-center justify-content-center"
                    )}
                  >
                    <img src="/img/hero/80.svg" alt="icon" />
                  </div>
                  <div className="static-text">
                    <h3 className={clsx(styles.blockHeading, "mb-0")}>
                      Zero Trust Architecture
                    </h3>
                    <p className="mb-0">
                      We designed the whole product following the zero trust
                      principle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="partnership" className={styles.partnership}>
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2 className={styles.heading}>Partnership</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center pt-50 md-pt-20">
              <div className="d-flex align-items-center gap-32">
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src="https://raw.githubusercontent.com/nixjs/coin-dapp-wallet-list/main/src/aptos/partner/assets/SimpleSwap.svg"
                    alt="icon"
                    className="m-auto"
                    height={48}
                  />
                  <a
                    href="https://simpleswap.io/"
                    className="button button--primary button--sm mt-24"
                    target="_blank"
                  >
                    SimpleSwap
                  </a>
                </div>
                <div className="d-flex flex-column justify-content-center">
                  <img
                    src="/img/stealthEx.png"
                    alt="icon"
                    className="m-auto"
                    height={48}
                  />
                  <a
                    href="https://stealthex.io/"
                    className="button button--primary button--sm mt-24"
                    target="_blank"
                  >
                    StealthEX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
