"use client";

import React, { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { DiagonalArrowIcon } from "@/components/icons/BankIcons";
import styles from "./Hero.module.css";

type TabName = "This Day" | "This Week" | "This Month" | "6 Month";

export const RecentActivityCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>("This Week");

  const getTransactionValue = () => {
    switch (activeTab) {
      case "This Day":
        return "-$12";
      case "This Month":
        return "-$480";
      case "6 Month":
        return "-$2,450";
      default:
        return "-$59";
    }
  };

  const getTransactionDate = () => {
    switch (activeTab) {
      case "This Day":
        return "Today, 10:14 AM";
      case "This Month":
        return "08 May 2022";
      case "6 Month":
        return "14 Feb 2022";
      default:
        return "12 Jan 2022";
    }
  };

  return (
    <GlassCard className={styles.activityCard} glow={true} glowColor="rgba(139, 92, 246, 0.15)">
      <h4 className={styles.activityTitle}>Recent activity</h4>

      {/* Tabs */}
      <div className={styles.tabList}>
        {(["This Day", "This Week", "This Month", "6 Month"] as TabName[]).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Transaction */}
      <div className={styles.transactionRow}>
        <div className={styles.transLeft}>
          <div className={styles.arrowCircle}>
            <DiagonalArrowIcon size={14} color="#ffffff" />
          </div>
          <div>
            <h5 className={styles.transName}>To Jin - Work</h5>
            <p className={styles.transDate}>{getTransactionDate()}</p>
          </div>
        </div>
        <div className={styles.transRight}>
          <span className={styles.transAmount}>{getTransactionValue()}</span>
        </div>
      </div>
    </GlassCard>
  );
};
