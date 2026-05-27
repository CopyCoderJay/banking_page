"use client";

import React from "react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Insights.module.css";

// Reusable article item type
interface Article {
  id: string;
  tag: string;
  title: string;
  author: string;
  date: string;
}

export const Insights: React.FC = () => {
  const articles: Article[] = [
    {
      id: "1",
      tag: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
    {
      id: "2",
      tag: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
    {
      id: "3",
      tag: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/08/24",
    },
  ];

  return (
    <section className={styles.insightsSection}>
      <div className="container">
        <div className={styles.sectionLayout}>
          
          {/* Left Column: Header and CTA */}
          <div className={`${styles.leftCol} animate-fade-in-up`}>
            <h2 className={styles.title}>
              Get yourself <br />
              up-to-speed on <br />
              all the things <br />
              happening in <br />
              fintech
            </h2>
            <div className={styles.ctaWrapper}>
              <Button variant="outline" className={styles.insightsCta}>
                INSIGHTS
              </Button>
            </div>
          </div>

          {/* Right Column: Grid of cards */}
          <div className={styles.rightCol}>
            
            {/* Featured Article Card (Card 1) */}
            <div className={`${styles.featuredCard} animate-scale-up`}>
              {/* Cover Art with 4 Symmetric Cross-Stars */}
              <div className={styles.coverArt}>
                <div className={styles.starGrid}>
                  {[1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className={styles.crossStar}
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="#0082f3"
                      strokeWidth="2.5"
                    >
                      <path d="M24 4C24 16 16 24 4 24C16 24 24 32 24 44C24 32 32 24 44 24C32 24 24 16 24 4Z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className={styles.cardContent}>
                <span className={styles.articleTag}>{articles[0].tag}</span>
                <h3 className={styles.featuredTitle}>{articles[0].title}</h3>
                
                <div className={styles.cardFooter}>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{articles[0].author}</span>
                    <span className={styles.bullet}>•</span>
                    <span className={styles.publishDate}>{articles[0].date}</span>
                  </div>
                  <Button variant="outline" className={styles.readMoreBtn}>
                    READ MORE
                  </Button>
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Compact Grid Cards side-by-side */}
            <div className={styles.compactGrid}>
              {articles.slice(1).map((art, idx) => (
                <div
                  key={art.id}
                  className={`${styles.compactCard} animate-scale-up`}
                  style={{ animationDelay: `${0.2 * (idx + 1)}s` }}
                >
                  <div className={styles.cardContent}>
                    <span className={styles.articleTag}>{art.tag}</span>
                    <h4 className={styles.compactTitle}>{art.title}</h4>
                    
                    <div className={styles.cardFooter}>
                      <div className={styles.authorMeta}>
                        <span className={styles.authorName}>{art.author}</span>
                        <span className={styles.bullet}>•</span>
                        <span className={styles.publishDate}>{art.date}</span>
                      </div>
                      <Button variant="outline" className={styles.readMoreBtn}>
                        READ MORE
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
