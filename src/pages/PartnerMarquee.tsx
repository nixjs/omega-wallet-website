import React from "react";
import Marquee from "react-fast-marquee";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

export const PartnerMarqueeSection: React.FC = () => {
  return (
    <div className={styles["partner-marquee"]}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className={clsx(styles["partner-title"], "position-relative")}>
              <h3>Our Partners</h3>
              <span className="w500">Partner by the best</span>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="d-flex items-center h-100 partner-wrapper">
              <Marquee className="marquee" style={{ color: "red" }}>
                <img
                  src="/img/partner/simpleswap.svg"
                  height={33}
                  width={145}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faLink}
                  color="rgba(157, 152, 152, 0.4)"
                />
                <img
                  src="/img/partner/stealthEx.svg"
                  height={62}
                  width={145}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faLink}
                  color="rgba(157, 152, 152, 0.4)"
                />
                <img
                  src="/img/partner/exolix.png"
                  height={56}
                  width={145}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faLink}
                  color="rgba(157, 152, 152, 0.4)"
                />
                <img
                  src="/img/partner/swapuz.svg"
                  height={48}
                  width={145}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faLink}
                  color="rgba(157, 152, 152, 0.4)"
                />
                <img
                  src="/img/partner/changehero.svg"
                  height={48}
                  width={145}
                  alt=""
                />
                <FontAwesomeIcon
                  icon={faLink}
                  color="rgba(157, 152, 152, 0.4)"
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
