import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import styles from "../pages/index.module.css";

export const WhySection: React.FC = () => {
  return (
    <div className={styles["why-section"]}>
      {/* <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 m-auto">
            <div className={clsx(styles["section-title"], "text-center")}>
              <h2 className="text-64">The wallet you can trust</h2>
              <p className="text-24 position-relative">
                We built the wallet from the ground up and open sourced from Day
                One.
              </p>
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
      </div> */}
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div className="col-lg-6">
                <div className={styles["section-title"]}>
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      size="5x"
                      color="var(--ifm-link-color)"
                      className="mr-4"
                    />
                    <h2 className="text-48">The wallet you can trust</h2>
                  </div>
                  <p className="text-24 position-relative">
                    We built the wallet from the ground up and open sourced from
                    Day One.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="magnetic-wrap">
                  <div
                    className={clsx(
                      styles["why-right-img"],
                      "position-relative zindex-1"
                    )}
                  >
                    <img className="img-fluid" src="/img/why.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["choose-btm"]}>
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className={styles["why-left-content"]}>
                  <div className="vectors">
                    <img
                      className="position-absolute left-0 bottom-0"
                      src="/img/choose-vec-top.svg"
                      alt=""
                    />
                    <img
                      className="position-absolute right-0 top-0"
                      src="/img/choose-vec-btm.svg"
                      alt=""
                    />
                  </div>
                  <div
                    className={clsx(
                      "d-flex align-items-center mb-16",
                      styles["logo"]
                    )}
                  >
                    <img
                      src="/img/omega-dark.svg"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <span className="w700 text-24 ml-8">Omega Wallet</span>
                  </div>
                  <h4 className={clsx("text-32 mb-16", styles["title"])}>
                    Zero Trust Architecture
                  </h4>
                  <p>
                    We designed the whole product following the zero trust
                    principle, assuming everything is unreliable and securing
                    your wallet from the beginning
                  </p>
                  <div className={styles["number"]}>
                    <span>#1</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={styles["choose-feature"]}>
                  <ul>
                    <li>
                      <div className={styles["single-feature"]}>
                        <div className="progress">
                          <h3>
                            <span className="number">#2</span>
                          </h3>
                        </div>
                        <div className="content">
                          <h4 className="text-24">Non-custodial</h4>
                          <p>
                            You and only you are in control of your assets. Your
                            keys, your crypto.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles["single-feature"]}>
                        <div className="progress">
                          <h3>
                            <span className="number">#3</span>
                          </h3>
                        </div>
                        <div className="content">
                          <h4 className="text-24">Tracking nothing</h4>
                          <p>
                            We value your privacy and will never track or store
                            any of your personal or financial information.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={styles["single-feature"]}>
                        <div className="progress">
                          <h3>
                            <span className="number">#4</span>
                          </h3>
                        </div>
                        <div className="content">
                          <h4 className="text-24">Provide Web3</h4>
                          <p>
                            Omega also provides web3 connection for dApps
                            builders to integrate with Aptos, SUI & EVM based
                            ecosystem in a handy way.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
