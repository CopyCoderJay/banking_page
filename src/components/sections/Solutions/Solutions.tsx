"use client";

import React from "react";
import { Button } from "@/components/ui/Button/Button";
import { SolutionCard } from "./SolutionCard";
import {
  SpiralIcon,
  NodesIcon,
  AtomicIcon,
  VectorsIcon,
  VaultIcon,
} from "@/components/icons/BankIcons";
import styles from "./Solutions.module.css";

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className={styles.solutionsSection}>
      <div className="container">
        <div className={styles.solutionsGrid}>
          {/* Left copy column */}
          <div className={styles.leftCol}>
            <h2 className={styles.mainTitle}>
              All of our solutions are <br />
              tailor-made to your needs
            </h2>
            <Button variant="outline" className={styles.ctaBtn}>
              REQUEST DEMO
            </Button>
          </div>

          {/* Right 2x2 cards grid */}
          <div className={styles.rightCol}>
            <div className={styles.cardsGrid}>
              <SolutionCard
                icon={<SpiralIcon size={32} color="#00e1ff" />}
                title="Core Banking CB7"
                description="CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance."
                glowColor="rgba(0, 225, 255, 0.15)"
              />

              <SolutionCard
                icon={<NodesIcon size={32} color="#0082f3" />}
                title="Digital Banking N7"
                description="N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
                glowColor="rgba(0, 130, 243, 0.15)"
              />

              <SolutionCard
                icon={<AtomicIcon size={32} color="#8b5cf6" />}
                title="Open Banking"
                description="Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring."
                glowColor="rgba(139, 92, 246, 0.15)"
              />

              <SolutionCard
                icon={<VectorsIcon size={32} color="#34d399" />}
                title="Loan Origination System"
                badge="NBFC"
                description="N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients."
                glowColor="rgba(52, 211, 153, 0.15)"
              />

              <SolutionCard
                icon={<VaultIcon size={32} color="#f59e0b" />}
                title="Loan Management System"
                badge="NBFC"
                description="Our automated Loan Management platform handles the complete servicing lifecycle—from disbursal and payment schedule tracking to collection management, compliance reporting, and interest adjustments."
                glowColor="rgba(245, 158, 11, 0.15)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
