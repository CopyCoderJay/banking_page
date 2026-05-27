"use client";

import React from "react";
import styles from "./Hero.module.css";
import {
  ShellsLogo,
  SmartFinderLogo,
  ZoomerrLogo,
  ArtVenueLogo,
  KontrastrLogo,
  WavesMarathonLogo,
} from "@/components/icons/BrandLogos";

export const LogoCloud: React.FC = () => {
  return (
    <div className={styles.logoCloudContainer}>
      <h5 className={styles.trustedTitle}>Trusted By:</h5>
      <div className={styles.logoGrid}>
        <div className={styles.logoItem}>
          <ShellsLogo className={styles.brandLogo} />
        </div>
        <div className={styles.logoItem}>
          <SmartFinderLogo className={styles.brandLogo} />
        </div>
        <div className={styles.logoItem}>
          <ZoomerrLogo className={styles.brandLogo} />
        </div>
        <div className={styles.logoItem}>
          <ArtVenueLogo className={styles.brandLogo} />
        </div>
        <div className={styles.logoItem}>
          <KontrastrLogo className={styles.brandLogo} />
        </div>
        <div className={styles.logoItem}>
          <WavesMarathonLogo className={styles.brandLogo} />
        </div>
      </div>
    </div>
  );
};
