"use client";

import React from "react";
import { KycDashboard } from "./KycDashboard";
import { CheckCircleIcon } from "@/components/icons/BankIcons";
import styles from "./KycSystem.module.css";

export const KycSystem: React.FC = () => {
  const points = [
    "Customer-On Boarding",
    "Managing deposits and withdrawals",
    "Transaction management",
    "Interest Calculation",
    "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
    "CRM Activities",
    "Configuring New Banking Products",
    "Loan disbursal and Loan management",
    "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  ];

  return (
    <section id="kyc" className={styles.kycSection}>
      <div className="container">
        <div className={styles.kycGrid}>
          {/* Left Column (Mockup Dashboard inside a responsive browser card) */}
          <div className={`${styles.leftCol} animate-scale-up`}>
            <div className={styles.laptopContainer}>
              <div className={styles.laptopScreen}>
                <KycDashboard />
              </div>
              <div className={styles.laptopBase} />
            </div>
          </div>

          {/* Right Column (List details) */}
          <div className={`${styles.rightCol} animate-fade-in-up`}>
            <h2 className={styles.mainTitle}>
              Run a more efficient, flexible, and <br />
              digitally connected corebanking system
            </h2>
            
            <h4 className={styles.listSubtitle}>What you will get:</h4>
            
            <div className={styles.checklist}>
              {points.map((point, index) => (
                <div key={index} className={styles.checkItem}>
                  <div className={styles.checkIconWrapper}>
                    <CheckCircleIcon size={20} color="#0082f3" />
                  </div>
                  <span className={styles.pointText}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
