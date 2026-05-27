"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { ChevronDownIcon } from "@/components/icons/BankIcons";

export const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>N7</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.navLinks}>
          <div className={styles.navItemContainer}>
            <button
              className={`${styles.navLink} ${
                activeDropdown === "solutions" ? styles.active : ""
              }`}
              onClick={() => toggleDropdown("solutions")}
            >
              SOLUTIONS <ChevronDownIcon size={12} className={styles.chevron} />
            </button>
            {activeDropdown === "solutions" && (
              <div className={styles.dropdownMenu}>
                <a href="#core-banking" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Core Banking CB7
                </a>
                <a href="#digital-banking" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Digital Banking N7
                </a>
                <a href="#open-banking" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Open Banking
                </a>
                <a href="#loan-origination" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Loan Origination
                </a>
              </div>
            )}
          </div>

          <div className={styles.navItemContainer}>
            <button
              className={`${styles.navLink} ${
                activeDropdown === "resources" ? styles.active : ""
              }`}
              onClick={() => toggleDropdown("resources")}
            >
              RESOURCES <ChevronDownIcon size={12} className={styles.chevron} />
            </button>
            {activeDropdown === "resources" && (
              <div className={styles.dropdownMenu}>
                <a href="#docs" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Documentation
                </a>
                <a href="#api" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  API Reference
                </a>
                <a href="#case-studies" className={styles.dropdownItem} onClick={() => setActiveDropdown(null)}>
                  Case Studies
                </a>
              </div>
            )}
          </div>

          <a href="#about" className={styles.navLink}>
            ABOUT US
          </a>
        </nav>

        {/* CTA Button */}
        <div className={styles.ctaWrapper}>
          <a href="#request-demo" className={styles.ctaButton}>
            REQUEST DEMO
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`${styles.mobileMenuToggle} ${
            mobileMenuOpen ? styles.open : ""
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileNavLinks}>
            <div className={styles.mobileGroup}>
              <h3 className={styles.mobileGroupTitle}>SOLUTIONS</h3>
              <a href="#core-banking" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Core Banking CB7
              </a>
              <a href="#digital-banking" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Digital Banking N7
              </a>
              <a href="#open-banking" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Open Banking
              </a>
              <a href="#loan-origination" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Loan Origination
              </a>
            </div>

            <div className={styles.mobileGroup}>
              <h3 className={styles.mobileGroupTitle}>RESOURCES</h3>
              <a href="#docs" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                Documentation
              </a>
              <a href="#api" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>
                API Reference
              </a>
            </div>

            <div className={styles.mobileGroup}>
              <a
                href="#about"
                className={styles.mobileGroupTitle}
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT US
              </a>
            </div>

            <a
              href="#request-demo"
              className={styles.mobileCta}
              onClick={() => setMobileMenuOpen(false)}
            >
              REQUEST DEMO
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
