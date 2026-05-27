"use client";

import React from "react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { BellIcon, TransferIcon, WalletIcon, GridIcon } from "@/components/icons/BankIcons";
import styles from "./Hero.module.css";

export const BalanceCard: React.FC = () => {
  return (
    <GlassCard className={styles.balanceCard} glow={true} glowColor="rgba(0, 186, 255, 0.15)">
      {/* Header Info */}
      <div className={styles.cardHeader}>
        <div className={styles.userInfo}>
          <Image
            src="/avatar_toni.png"
            alt="Toni Kross"
            width={40}
            height={40}
            className={styles.avatar}
            priority
          />
          <div>
            <h4 className={styles.userName}>Toni Kross</h4>
            <p className={styles.greeting}>Good Morning</p>
          </div>
        </div>
        <button className={styles.notificationBtn} aria-label="Notifications">
          <BellIcon size={18} />
          <span className={styles.activeDot} />
        </button>
      </div>

      {/* Balance Details */}
      <div className={styles.balanceSection}>
        <p className={styles.balanceLabel}>Total balance</p>
        <h3 className={styles.balanceAmount}>$42,295.00 <span className={styles.currency}>USD</span></h3>
      </div>

      {/* Action Dock */}
      <div className={styles.actionDock}>
        <div className={styles.actionItem}>
          <button className={styles.actionIconBtn} aria-label="Fund Transfer">
            <TransferIcon size={18} />
          </button>
          <span className={styles.actionLabel}>Fund Transfer</span>
        </div>

        <div className={styles.actionItem}>
          <button className={styles.actionIconBtn} aria-label="Add Money">
            <WalletIcon size={18} />
          </button>
          <span className={styles.actionLabel}>Add Money</span>
        </div>

        <div className={styles.actionItem}>
          <button className={styles.actionIconBtn} aria-label="More">
            <GridIcon size={18} />
          </button>
          <span className={styles.actionLabel}>More</span>
        </div>
      </div>
    </GlassCard>
  );
};
