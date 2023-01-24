import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export const FeatureSection = () => {
  return (
    <div className={styles["feature-section"]} id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className={clsx(styles["section-title"], "text-center")}>
              <div className={styles["section-heading"]}>Features</div>
              <h2 className={styles["section-caption"]}>
                <span className="position-relative">
                  All-in-one Platform
                  <img
                    className={clsx(styles["section-line"], "m-auto")}
                    src="/img/hero/line-shape-14.svg"
                    alt="line shape"
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-border pb-50">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/94.svg" alt="icon" />
                </div>
                <h4>Easy to read Activity History</h4>
                <p>
                  Keep track of your activity with an easy-to-follow transaction
                  history
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/95.svg" alt="icon" />
                </div>
                <h4>Send Tokens & NFTs</h4>
                <p>
                  Send & receive Tokens directly in your wallet with 1 click
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/96.svg" alt="icon" />
                </div>
                <h4>Manage your NFT collection</h4>
                <p>
                  Safely store your favorite NFTs, check floor prices, set an
                  NFT profile picture and more
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/97.svg" alt="icon" />
                </div>
                <h4>Connect to dapps</h4>
                <p>
                  Omega Wallet is the easiest way to safely connect to dapps.
                  Take your account, data and tokens from app to app seamlessly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/98.svg" alt="icon" />
                </div>
                <h4>Quick and Easy Swaps</h4>
                <p>
                  Take advantage of the built-in swap function that allows you
                  to swap assets across chains - without leaving the wallet.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <div className={clsx(styles.icon, "d-flex align-items-end")}>
                  <img src="/img/hero/icon/99.svg" alt="icon" />
                </div>
                <h4>Multiple Blockchains</h4>
                <p>
                  Liquality connects you with your preferred blockchains - no
                  need to have a different wallet for each chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
