"use client";

import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { AmlDashboard } from "./AmlDashboard";
import { ArrowRightIcon } from "@/components/icons/BankIcons";
import styles from "./CloudCore.module.css";

export const CloudCore: React.FC = () => {
  return (
    <section id="core-banking" className={styles.cloudSection}>
      {/* Gigantic decorative outline background texts */}
      <div className={styles.bgGlyphLeft}>CB7</div>
      <div className={styles.bgGlyphRight}>CB7</div>

      {/* Decorative ambient glows */}
      <div className={styles.radialGlow} />

      <div className="container">
        <div className={styles.cloudGrid}>
          {/* Left Column (Copy and Links) */}
          <div className={`${styles.leftCol} animate-fade-in-up`}>
            <h2 className={styles.mainTitle}>
              A complete cloud-based <br className={styles.desktopBr} />
              core banking.
            </h2>
            <p className={styles.subtitle}>
              Faster time to market with our cloud-based <br className={styles.desktopBr} />
              core banking services
            </p>
            <div className={styles.actionsGroup}>
              <Button variant="primary" className={styles.primaryCta}>
                REQUEST DEMO
              </Button>
              <a href="#solutions" className={styles.learnMore}>
                LEARN MORE <ArrowRightIcon size={12} className={styles.arrow} />
              </a>
            </div>
          </div>

          {/* Right Column (Interactive AML Dashboard Mockup in browser frame) */}
          <div className={`${styles.rightCol} animate-scale-up`}>
            <div className={styles.laptopContainer}>
              <div className={styles.laptopScreen}>
                <AmlDashboard />
              </div>
              <div className={styles.laptopBase} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
