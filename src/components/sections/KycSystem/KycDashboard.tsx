"use client";

import React from "react";
import styles from "./KycSystem.module.css";
import { Badge } from "@/components/ui/Badge/Badge";

export const KycDashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Dashboard Top Navigation bar */}
      <div className={styles.dashHeader}>
        <div className={styles.dashNavLeft}>
          <span className={styles.searchBar}>Search here...</span>
        </div>
        <div className={styles.dashNavRight}>
          <span className={styles.bellIcon}>🔔</span>
          <div className={styles.profileIndicator}>
            <span className={styles.profileDot} />
            <span className={styles.profileText}>KYC Officer</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.dashMain}>
        {/* Left Side: General Statistics Mockup */}
        <div className={styles.dashOverview}>
          <h4 className={styles.sectionTitle}>KYC Dashboard</h4>
          <span className={styles.sectionSubtitle}>XXXXXXXXXX</span>

          <div className={styles.statsOverviewRow}>
            <div className={styles.overviewBox}>
              <span className={styles.overviewVal} style={{ color: "#0082f3" }}>2,115</span>
              <span className={styles.overviewLabel}>Total Customers</span>
            </div>
            <div className={styles.overviewBox}>
              <span className={styles.overviewVal} style={{ color: "#f59e0b" }}>940</span>
              <span className={styles.overviewLabel}>KYC In Progress</span>
            </div>
            <div className={styles.overviewBox}>
              <span className={styles.overviewVal} style={{ color: "#10b981" }}>1,053</span>
              <span className={styles.overviewLabel}>KYC Completed</span>
            </div>
          </div>

          {/* Graphical Trends */}
          <div className={styles.trendsCard}>
            <h5 className={styles.cardHeaderTitle}>Branch Performance - Periodic Response</h5>
            <div className={styles.trendsGraphic}>
              {/* Custom SVG line trends mockup */}
              <svg width="100%" height="80" viewBox="0 0 300 80" className={styles.trendsSvg}>
                <path d="M 0 50 Q 50 20 100 60 T 200 10 T 300 40" fill="none" stroke="rgba(0, 130, 243, 0.4)" strokeWidth="2" />
                <path d="M 0 50 Q 50 20 100 60 T 200 10 T 300 40 L 300 80 L 0 80 Z" fill="rgba(0, 130, 243, 0.03)" />
                <circle cx="100" cy="60" r="3" fill="#0082f3" />
                <circle cx="200" cy="10" r="3" fill="#10b981" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side: Floating Sidebar Drawer showing "Failed Records" */}
        <div className={styles.drawerSidebar}>
          <div className={styles.drawerHeader}>
            <div>
              <h4 className={styles.drawerTitle}>Failed Records</h4>
              <p className={styles.drawerSub}>Branch No: <strong style={{ color: "#ef4444" }}>152</strong></p>
            </div>
            <Badge variant="danger" className={styles.drawerCount}>22</Badge>
          </div>

          <div className={styles.drawerList}>
            {/* Record 1 */}
            <div className={styles.drawerItem}>
              <div className={styles.itemTop}>
                <span className={styles.itemIndex}>1.</span>
                <span className={styles.itemName}>Anoop Krishnan</span>
              </div>
              <p className={styles.itemError}>Aadhar Number not matching</p>
              <p className={styles.itemErrorDetails}>PAN No. missing</p>
              <button className={styles.updateBtn}>Update</button>
            </div>

            {/* Record 2 */}
            <div className={styles.drawerItem}>
              <div className={styles.itemTop}>
                <span className={styles.itemIndex}>2.</span>
                <span className={styles.itemName}>Ajith Kumar</span>
              </div>
              <p className={styles.itemError}>Signature mismatch in document</p>
              <button className={styles.updateBtn}>Update</button>
            </div>

            {/* Record 3 */}
            <div className={styles.drawerItem}>
              <div className={styles.itemTop}>
                <span className={styles.itemIndex}>3.</span>
                <span className={styles.itemName}>Raghu Nandan</span>
              </div>
              <p className={styles.itemError}>Address verification pending</p>
              <button className={styles.updateBtn}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
