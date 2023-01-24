import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export const WhySection = () => {
  return (
    <div className={styles["why-section"]}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 m-auto">
            <div className={styles["section-title"]}>
              <div className={clsx(styles["section-heading"], "text-center")}>
                Trust
              </div>
              <h2 className={clsx(styles["section-caption"], "text-center")}>
                <span className="position-relative">
                  The wallet you can trust
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
      <div className={clsx(styles["wrapper"], "position-relative")}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={clsx("d-flex", styles["block-section"])}>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-center",
                    styles["block-icon"]
                  )}
                  style={{ background: "rgb(247, 237, 255)" }}
                >
                  <img src="/img/hero/icon/166.svg" alt="icon" />
                </div>
                <div className={styles["block-content"]}>
                  <h4>Non-custodial</h4>
                  <p>
                    You and only you are in control of your assets. Your keys,
                    your crypto.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={clsx("d-flex", styles["block-section"])}>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-center",
                    styles["block-icon"]
                  )}
                  style={{ background: "rgb(216, 255, 241)" }}
                >
                  <img src="/img/hero/icon/167.svg" alt="icon" />
                </div>
                <div className={styles["block-content"]}>
                  <h4>Tracking nothing</h4>
                  <p>
                    We value your privacy and will never track or store any of
                    your personal or financial information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={clsx("d-flex", styles["block-section"])}>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-center",
                    styles["block-icon"]
                  )}
                  style={{ background: "rgb(230, 251, 255)" }}
                >
                  <img src="/img/hero/icon/168.svg" alt="icon" />
                </div>
                <div className={styles["block-content"]}>
                  <h4>Zero Trust Architecture</h4>
                  <p>
                    We designed the whole product following the zero trust
                    principle.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className={clsx("d-flex", styles["block-section"])}>
                <div
                  className={clsx(
                    "d-flex align-items-center justify-content-center",
                    styles["block-icon"]
                  )}
                  style={{ background: "rgb(255, 235, 219)" }}
                >
                  <img src="/img/hero/icon/169.svg" alt="icon" />
                </div>
                <div className={styles["block-content"]}>
                  <h4>Provide Web3</h4>
                  <p>
                    Omega also provides web3 connection for dApps builders to
                    integrate with Aptos, SUI & EVM based ecosystem in a handy
                    way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/hero/shape/237.svg"
          alt="shape"
          className={clsx(styles["shapes"], styles["shape-one"])}
        />
        <img
          src="/img/hero/shape/238.svg"
          alt="shape"
          className={clsx(styles["shapes"], styles["shape-two"])}
        />
      </div>
    </div>
  );
};
