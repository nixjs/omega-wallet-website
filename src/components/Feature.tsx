import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faShuffle,
  faListCheck,
  faLink,
  faWandMagicSparkles,
  faCircleNodes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../pages/index.module.css";

export const FeatureSection: React.FC = () => {
  return (
    <div className={styles["feature-section"]} id="feature">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className={clsx(styles["section-title"], "text-center")}>
              <h2 className="text-64">All-in-one Platform</h2>
              <p className="text-24 position-relative">
                Omega is a web3 wallet that unlocks a universe of applications
                in Aptos, SUI and EVM-based Blockchain.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-border pb-50">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faImage}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
                <h4>Easy to read Activity History</h4>
                <p>
                  Keep track of your activity with an easy-to-follow transaction
                  history
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faShuffle}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
                <h4>Send Tokens & NFTs</h4>
                <p>
                  Send & receive Tokens directly in your wallet with 1 click
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faListCheck}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
                <h4>Manage your NFT collection</h4>
                <p>
                  Safely store your favorite NFTs, check floor prices, set an
                  NFT profile picture and more
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faLink}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
                <h4>Connect to dapps</h4>
                <p>
                  Omega Wallet is the easiest way to safely connect to dapps.
                  Take your account, data and tokens from app to app seamlessly.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faWandMagicSparkles}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
                <h4>Quick and Easy Swaps</h4>
                <p>
                  Take advantage of the built-in swap function that allows you
                  to swap assets across chains - without leaving the wallet.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className={styles["block-meta"]}>
                <FontAwesomeIcon
                  icon={faCircleNodes}
                  size="3x"
                  color="var(--ifm-link-color)"
                />
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

export default FeatureSection;
