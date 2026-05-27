"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./CaseStudies.module.css";

interface StudyCard {
  id: string;
  tag: string;
  title: string;
  brand: string;
  logoColor: string;
}

export const CaseStudies: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const studies: StudyCard[] = [
    {
      id: "zoomerr",
      tag: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      brand: "Zoomerr",
      logoColor: "#00baff",
    },
    {
      id: "artvenue",
      tag: "CASE STUDY",
      title: "Optimizing automated workflow operations for ArtVenue",
      brand: "ArtVenue",
      logoColor: "#8b5cf6",
    },
    {
      id: "kontrastr",
      tag: "SECURITY REPORT",
      title: "Deploying highly secured paper-less cores in Kontrastr",
      brand: "Kontrastr",
      logoColor: "#10b981",
    },
  ];

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % studies.length);
  };

  return (
    <section className={styles.caseSection}>
      <div className="container">
        
        {/* Section Title */}
        <div className={`${styles.headerArea} animate-fade-in`}>
          <h2 className={styles.sectionTitle}>Our Case Studies</h2>
        </div>

        {/* 3D Stack Container */}
        <div className={styles.stackWrapper}>
          
          <div className={styles.cardsTrack} onClick={handleNext} title="Click to view next case study">
            {studies.map((study, idx) => {
              // Calculate 3D stacking indices based on activeIdx
              const position = (idx - activeIdx + studies.length) % studies.length;
              
              let cardClass = styles.stackedCard;
              if (position === 0) cardClass += ` ${styles.activeCard}`;
              else if (position === 1) cardClass += ` ${styles.middleCard}`;
              else cardClass += ` ${styles.backCard}`;

              return (
                <div
                  key={study.id}
                  className={cardClass}
                  style={{
                    zIndex: studies.length - position,
                  }}
                >
                  <div className={styles.cardInner}>
                    
                    {/* Left: Starburst Cover Art */}
                    <div className={styles.coverArt}>
                      <div className={styles.starGrid}>
                        {[1, 2, 3, 4].map((i) => (
                          <svg
                            key={i}
                            className={styles.crossStar}
                            viewBox="0 0 48 48"
                            fill="none"
                            stroke="#00baff"
                            strokeWidth="2.5"
                          >
                            <path d="M24 4C24 16 16 24 4 24C16 24 24 32 24 44C24 32 32 24 44 24C32 24 24 16 24 4Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* Right: Content details */}
                    <div className={styles.cardContent}>
                      <span className={styles.cardTag}>{study.tag}</span>
                      <h3 className={styles.cardTitle}>{study.title}</h3>
                      
                      {/* Logo and Brand row */}
                      <div className={styles.brandRow}>
                        <div className={styles.brandLogoCircle} style={{ "--logo-color": study.logoColor } as React.CSSProperties}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className={styles.brandName}>{study.brand}</span>
                      </div>

                      {/* CTA read more */}
                      <div className={styles.ctaRow}>
                        <Button variant="outline" className={styles.readMoreBtn}>
                          READ MORE
                        </Button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Stack Controller dots */}
          <div className={styles.dotControls}>
            {studies.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === activeIdx ? styles.activeDot : ""}`}
                onClick={() => setActiveIdx(idx)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
