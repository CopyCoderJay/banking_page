"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { BalanceCard } from "./BalanceCard";
import { RecentActivityCard } from "./RecentActivityCard";
import { LogoCloud } from "./LogoCloud";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Decorative glows */}
      <div className={styles.blueGlow} />
      <div className={styles.tealGlow} />

      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left copy column */}
          <div className={`${styles.leftCol} animate-fade-in-up`}>
            <h1 className={styles.mainTitle}>
              The new foundation <br />
              of modern banking
            </h1>
            <p className={styles.subtitle}>
              We drive innovation and growth, provide seamless <br />
              customer experience and operational excellence
            </p>
            <div className={styles.ctaGroup}>
              <Button variant="primary" className={styles.primaryCta}>
                REQUEST DEMO
              </Button>
              <Button variant="outline" className={styles.outlineCta}>
                CONTACT US
              </Button>
            </div>
          </div>

          {/* Right mockup column */}
          <div className={`${styles.rightCol} animate-scale-up`}>
            {/* The main picture with rounded borders and glow shadow background */}
            <div className={styles.mockupWrapper}>
              <div className={styles.imageGlowRing} />
              <div className={styles.imageBorderMask}>
                <Image
                  src="/hero_woman.png"
                  alt="Modern Banking Solution"
                  width={460}
                  height={320}
                  className={styles.mockupImage}
                  priority
                />
              </div>

              {/* Overlay Glass Cards */}
              <div className={styles.balanceCardOverlay}>
                <BalanceCard />
              </div>
              <div className={styles.activityCardOverlay}>
                <RecentActivityCard />
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <LogoCloud />
      </div>
    </section>
  );
};
