import React from "react";
import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Solutions } from "@/components/sections/Solutions/Solutions";
import { CloudCore } from "@/components/sections/CloudCore/CloudCore";
import { KycSystem } from "@/components/sections/KycSystem/KycSystem";
import { DigitalBanking } from "@/components/sections/DigitalBanking/DigitalBanking";
import { CaseStudies } from "@/components/sections/CaseStudies/CaseStudies";
import { Insights } from "@/components/sections/Insights/Insights";
import { PaperlessCta } from "@/components/sections/PaperlessCta/PaperlessCta";
import { Footer } from "@/components/sections/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      {/* Dynamic Floating Pill Navbar Header */}
      <Header />

      {/* Main Content Layout Sections */}
      <main className={styles.mainContent}>
        {/* Section 1: Hero view with mockup illustrations and logo clouds */}
        <Hero />

        {/* Section 2: Solutions 2x2 grid segment */}
        <Solutions />

        {/* Section 3: Cloud core banking feature showcase with interactive AML charts */}
        <CloudCore />

        {/* Section 4: Operations checklist and KYC mockup */}
        <KycSystem />

        {/* Section 5: Digital Banking out-of-the-box scrolling phone mockups */}
        <DigitalBanking />

        {/* Section 6: Our Case Studies 3D stacked deck carousel */}
        <CaseStudies />

        {/* Section 7: Fintech Insights and Blog Articles Grid */}
        <Insights />

        {/* Section 8: Paper-less call-to-action banner card */}
        <PaperlessCta />

        {/* Section 9: Structured Brand Footer */}
        <Footer />
      </main>
    </div>
  );
}
