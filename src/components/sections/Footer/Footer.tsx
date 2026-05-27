"use client";

import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const officeLocations = [
    {
      country: "London",
      address: "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
    },
    {
      country: "Dubai",
      address: "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates.",
    },
    {
      country: "India",
      address: "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India.",
    },
  ];

  const solutionsLinks = [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ];

  const companyLinks = [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "X", url: "https://x.com" },
  ];

  return (
    <footer className={styles.footerSection}>
      <div className="container">
        
        {/* Upper Row: Giant N7 logo + Locations */}
        <div className={styles.upperFooter}>
          {/* Giant Decorative N7 Logo */}
          <div className={styles.logoCol}>
            <span className={styles.giantLogo}>N7</span>
          </div>

          {/* Location details */}
          <div className={styles.locationsGrid}>
            {officeLocations.map((loc, idx) => (
              <div key={idx} className={styles.locationCard}>
                <h4 className={styles.locationTitle}>{loc.country}</h4>
                <p className={styles.locationAddress}>{loc.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Row: Categorized Links */}
        <div className={styles.middleFooter}>
          {/* Spacer to align links with locations */}
          <div className={styles.logoSpacer} />

          <div className={styles.linksGrid}>
            
            {/* Solutions Column */}
            <div className={styles.linkColumn}>
              <h5 className={styles.columnTitle}>Solutions</h5>
              <ul className={styles.linkList}>
                {solutionsLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className={styles.footerLink}>
                      {link}
                      <svg className={styles.linkArrow} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00baff" strokeWidth="3">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* N7 Banking Column */}
            <div className={styles.linkColumn}>
              <h5 className={styles.columnTitle}>N7 Banking</h5>
              <ul className={styles.linkList}>
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} className={styles.footerLink}>
                      {link}
                      <svg className={styles.linkArrow} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00baff" strokeWidth="3">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Socials Column */}
            <div className={styles.linkColumn}>
              <h5 className={styles.columnTitle}>Our Socials</h5>
              <ul className={styles.linkList}>
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                      {link.name}
                      <svg className={styles.linkArrow} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00baff" strokeWidth="3">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Lower Row: Copyright notes */}
        <div className={styles.bottomFooter}>
          <p className={styles.copyrightText}>
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  );
};
