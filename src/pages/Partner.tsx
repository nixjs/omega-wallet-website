import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";

export const PartnerSection: React.FC = () => {
  return (
    <div className={styles["partner-section"]}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-9 m-auto">
            <div className={styles["section-title"]}>
              <div className={clsx(styles["section-heading"], "text-center")}>
                Our partners
              </div>
              <h2 className={clsx(styles["section-caption"], "text-center")}>
                <span className="position-relative">
                  Partner by the best
                  <img
                    className={clsx(styles["section-line"], "m-auto")}
                    src="/img/hero/line-shape-14.svg"
                    alt="line shape"
                  />
                </span>
              </h2>
            </div>
            <div className="row justify-content-center pt-50 md-pt-20">
              <div className="d-flex align-items-center gap-32">
                <div
                  className={clsx(
                    "d-flex flex-column justify-content-center",
                    styles["block-content"]
                  )}
                >
                  <img
                    src="/img/partner/simpleswap-shorten.svg"
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
                <div
                  className={clsx(
                    "d-flex flex-column justify-content-center",
                    styles["block-content"]
                  )}
                >
                  <img
                    src="/img/partner/stealthEx.png"
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
                <div
                  className={clsx(
                    "d-flex flex-column justify-content-center",
                    styles["block-content"]
                  )}
                >
                  <img
                    src="/img/partner/exolix-dark.png"
                    alt="icon"
                    className="m-auto"
                    height={48}
                  />
                  <a
                    href="https://exolix.com/"
                    className="button button--primary button--sm mt-24"
                    target="_blank"
                  >
                    Exolix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
