"use client";

import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import styles from "./PaperlessCta.module.css";

export const PaperlessCta: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      {/* Decorative Glows */}
      <div className={styles.ambientGlow} />

      <div className="container">
        {/* Banner Card */}
        <GlassCard className={styles.bannerCard} glow={true} glowColor="rgba(0, 130, 243, 0.1)">
          {/* Faint Outline Text Layer */}
          <div className={styles.bgGlyph}>CB7</div>

          <div className={styles.bannerContent}>
            {/* Left copy */}
            <div className={styles.copyArea}>
              <h2 className={styles.bannerTitle}>
                Take the full advantage of <br />
                going paper-less now.
              </h2>
              <p className={styles.bannerSubtitle}>
                CB7 helps your financial institution improve the client experience, <br />
                automate and optimize procedures, simplify banking operations
              </p>
            </div>

            {/* Right actions */}
            <div className={styles.actionArea}>
              <Button variant="outline" className={styles.outlineBtn}>
                CONTACT US
              </Button>
              <Button variant="primary" className={styles.primaryBtn}>
                REQUEST DEMO
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
