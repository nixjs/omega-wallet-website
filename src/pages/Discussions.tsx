import React from "react";
import clsx from "clsx";
import { Download } from "./Download";
import styles from "./index.module.css";

export const DiscussionsSection = () => {
  return (
    <div className={styles["discussion-section"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles["section-title"]}>
              <h2 className={styles["section-caption"]}>
                We are open source. Build with us.
              </h2>
            </div>
            <p className={styles["section-subcaption"]}>
              Build with us and contribute to the future of apps built for
              Blockchain.
            </p>
            <a
              className="button button--primary button--lg mt-24"
              target="_blank"
              href="https://github.com/nixjs/omega-wallet-contribution/discussions"
            >
              Discussions
            </a>
          </div>
          <div className="col-md-12">
            <div className="mt-64 block-download-links">
              <h3 className="mb-32">Download Omega Wallet</h3>
              <Download />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/img/hero/shape/239.svg"
        alt="shape"
        className={clsx(styles["shapes"], styles["shape-one"])}
      />
      <img
        src="/img/hero/shape/240.svg"
        alt="shape"
        className={clsx(styles["shapes"], styles["shape-two"])}
      />
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
  );
};
