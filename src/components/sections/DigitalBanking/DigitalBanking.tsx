"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import {
  BellIcon,
  TransferIcon,
  WalletIcon,
  GridIcon,
  DiagonalArrowIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/icons/BankIcons";
import styles from "./DigitalBanking.module.css";

export const DigitalBanking: React.FC = () => {
  const tickerItems = [
    { text: "N7", isAccent: true },
    { isStar: true },
    { text: "Say" },
    { text: "👋" },
    { text: "to the new way of banking" },
    { isStar: true },
    { text: "CB7", isAccent: true },
    { isStar: true },
    { text: "Say" },
    { text: "👋" },
    { text: "to the new way of banking" },
    { isStar: true },
  ];

  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <section className={styles.digitalSection}>
      {/* Infinite scrolling ticker at the very top of the section */}
      <div className={styles.tickerContainer}>
        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            {repeatedItems.map((item, idx) => (
              <span
                key={idx}
                className={`${styles.tickerItem} ${
                  item.isAccent ? styles.accentItem : ""
                } ${item.isStar ? styles.starItem : ""}`}
              >
                {item.isStar ? (
                  <svg
                    className={styles.starIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#a3b1c2"
                    strokeWidth="2.5"
                  >
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="5" y1="19" x2="19" y2="5" />
                  </svg>
                ) : (
                  item.text
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Giant faint decorative text N7 running in background */}
      <div className={styles.bgGlyph}>N7</div>

      <div className="container">
        {/* ==========================================
            SUBSECTION 1: Digital Banking Out-of-the-Box
            ========================================== */}
        <div className={styles.subSection}>
          <div className={styles.gridThreeCol}>
            {/* Column 1: Copy */}
            <div className={`${styles.copyCol} animate-fade-in-up`}>
              <h2 className={styles.sectionTitle}>
                Digital banking <br />
                out-of-the-box
              </h2>
              <p className={styles.sectionSubtitle}>
                N7 helps your financial institution improve the client experience,
                automate and optimize procedures
              </p>
              <div className={styles.actionsGroup}>
                <Button variant="primary" className={styles.primaryCta}>
                  REQUEST DEMO
                </Button>
                <a href="#solutions" className={styles.learnMore}>
                  LEARN MORE <ArrowRightIcon size={12} className={styles.arrow} />
                </a>
              </div>
            </div>

            {/* Column 2: iPhone 1 (Transactions list screen) */}
            <div className={`${styles.phoneCol} animate-scale-up`}>
              <div className={styles.iphone}>
                <div className={styles.dynamicIsland} />
                <div className={styles.iphoneScreen}>
                  {/* Phone header */}
                  <div className={styles.phoneHeader}>
                    <div className={styles.phoneUserInfo}>
                      <Image
                        src="/avatar_toni.png"
                        alt="Toni"
                        width={30}
                        height={30}
                        className={styles.phoneAvatar}
                      />
                      <div>
                        <h5 className={styles.phoneName}>Toni Kross</h5>
                        <p className={styles.phoneGreeting}>Good Morning</p>
                      </div>
                    </div>
                    <span className={styles.phoneBell}>🔔</span>
                  </div>

                  {/* Phone balance */}
                  <div className={styles.phoneBalanceSection}>
                    <span className={styles.phoneBalanceLbl}>Total balance</span>
                    <h4 className={styles.phoneBalanceVal}>$42,295.00 <span className={styles.phoneCurrency}>USD</span></h4>
                  </div>

                  {/* Phone Action dock */}
                  <div className={styles.phoneActionDock}>
                    <div className={styles.phoneActionItem}>
                      <span className={styles.phoneActionCircle}><TransferIcon size={14} /></span>
                      <span className={styles.phoneActionLabel}>Fund Transfer</span>
                    </div>
                    <div className={styles.phoneActionItem}>
                      <span className={styles.phoneActionCircle}><WalletIcon size={14} /></span>
                      <span className={styles.phoneActionLabel}>Add Money</span>
                    </div>
                    <div className={styles.phoneActionItem}>
                      <span className={styles.phoneActionCircle}><GridIcon size={14} /></span>
                      <span className={styles.phoneActionLabel}>More</span>
                    </div>
                  </div>

                  {/* Recent Activity list */}
                  <div className={styles.phoneActivitySection}>
                    <h5 className={styles.phoneActivityTitle}>Recent activity</h5>
                    <div className={styles.phoneTabs}>
                      <span className={styles.phoneTab}>This Day</span>
                      <span className={`${styles.phoneTab} ${styles.phoneTabActive}`}>This Week</span>
                      <span className={styles.phoneTab}>This Month</span>
                    </div>

                    <div className={styles.phoneList}>
                      {/* Item 1 */}
                      <div className={styles.phoneItem}>
                        <span className={`${styles.arrowIcon} ${styles.purpleArrow}`}><DiagonalArrowIcon size={10} /></span>
                        <div className={styles.itemMeta}>
                          <h6 className={styles.itemTitle}>To Jin - Work</h6>
                          <span className={styles.itemDate}>12 Jun 2022</span>
                        </div>
                        <span className={styles.itemAmount}>-$59</span>
                      </div>
                      {/* Item 2 */}
                      <div className={styles.phoneItem}>
                        <span className={`${styles.arrowIcon} ${styles.blueArrow}`}><DiagonalArrowIcon size={10} style={{ transform: "rotate(180deg)" }} /></span>
                        <div className={styles.itemMeta}>
                          <h6 className={styles.itemTitle}>From Google - Salary</h6>
                          <span className={styles.itemDate}>10 Jun 2022</span>
                        </div>
                        <span className={`${styles.itemAmount} ${styles.positive}`}>+$859</span>
                      </div>
                      {/* Item 3 */}
                      <div className={styles.phoneItem}>
                        <span className={`${styles.arrowIcon} ${styles.purpleArrow}`}><DiagonalArrowIcon size={10} /></span>
                        <div className={styles.itemMeta}>
                          <h6 className={styles.itemTitle}>To David - Work</h6>
                          <span className={styles.itemDate}>7 Jun 2022</span>
                        </div>
                        <span className={styles.itemAmount}>-$479</span>
                      </div>
                      {/* Item 4 */}
                      <div className={styles.phoneItem}>
                        <span className={`${styles.arrowIcon} ${styles.blueArrow}`}><DiagonalArrowIcon size={10} style={{ transform: "rotate(180deg)" }} /></span>
                        <div className={styles.itemMeta}>
                          <h6 className={styles.itemTitle}>From Google - Bonus</h6>
                          <span className={styles.itemDate}>10 Jun 2022</span>
                        </div>
                        <span className={`${styles.itemAmount} ${styles.positive}`}>+$859</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone Tabbar */}
                  <div className={styles.phoneTabbar}>
                    <span className={`${styles.tabIcon} ${styles.tabIconActive}`}>🏠<span className={styles.tabLabel}>Home</span></span>
                    <span className={styles.tabIcon}>💳<span className={styles.tabLabel}>Card</span></span>
                    <span className={styles.tabIcon}>🔄<span className={styles.tabLabel}>Tx</span></span>
                    <span className={styles.tabIcon}>👤<span className={styles.tabLabel}>Profile</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Checklist */}
            <div className={`${styles.checklistCol} animate-fade-in-up`}>
              <h4 className={styles.checklistTitle}>
                Fully compliant with regulatory requirement
              </h4>
              <p className={styles.checklistDesc}>
                The governance of risk management with regulations is achieved by
                our risk management framework that is fully integrated to work with
                digital bank's operational-risk protocols and procedures.
              </p>
              <div className={styles.checklistGroup}>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Pre-integrated Security System</span>
                </div>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Fully Compliant With Regulatory Requirement</span>
                </div>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Digitally Connected Core</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SUBSECTION 2: No Legacy IT Systems
            ========================================== */}
        <div className={styles.subSection}>
          <div className={styles.gridTwoCol}>
            {/* Column 1: Copy */}
            <div className={`${styles.copyCol} animate-fade-in-up`}>
              <h2 className={styles.sectionTitle}>
                No legacy IT systems
              </h2>
              <p className={styles.sectionSubtitle}>
                Our Digital Banking solution and multilayered approach help
                financial institutions take advantage of digital transformation by
                ensuring customer trust and regulatory compliance.
              </p>
            </div>

            {/* Column 2: iPhone 2 (Bar chart analytics screen) */}
            <div className={`${styles.phoneCol} animate-scale-up`}>
              <div className={styles.iphone}>
                <div className={styles.dynamicIsland} />
                <div className={styles.iphoneScreen}>
                  {/* Phone Header */}
                  <div className={styles.phoneHeader} style={{ marginBottom: "16px" }}>
                    <span className={styles.phoneTitle}>Analytics</span>
                    <span className={styles.phoneBell}>📊</span>
                  </div>

                  {/* Balance details */}
                  <div className={styles.phoneBalanceSection} style={{ marginBottom: "20px" }}>
                    <span className={styles.phoneBalanceLbl}>March 2022</span>
                    <h4 className={styles.phoneBalanceVal} style={{ color: "#0b1520" }}>$8,295.00 <span className={styles.phoneCurrency}>USD</span></h4>
                  </div>

                  {/* Monthly Bar Chart */}
                  <div className={styles.phoneChartCard}>
                    <div className={styles.phoneBars}>
                      {/* Jan */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={styles.phoneBarFill} style={{ height: "45%" }} />
                        </div>
                        <span className={styles.phoneBarLabel}>Jan</span>
                      </div>
                      {/* Feb */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={styles.phoneBarFill} style={{ height: "60%" }} />
                        </div>
                        <span className={styles.phoneBarLabel}>Feb</span>
                      </div>
                      {/* Mar (Active) */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={`${styles.phoneBarFill} ${styles.phoneBarFillActive}`} style={{ height: "85%" }} />
                        </div>
                        <span className={styles.phoneBarLabel} style={{ fontWeight: "700", color: "#0053c6" }}>Mar</span>
                      </div>
                      {/* Apr */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={styles.phoneBarFill} style={{ height: "40%" }} />
                        </div>
                        <span className={styles.phoneBarLabel}>Apr</span>
                      </div>
                      {/* May */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={styles.phoneBarFill} style={{ height: "55%" }} />
                        </div>
                        <span className={styles.phoneBarLabel}>May</span>
                      </div>
                      {/* Jun */}
                      <div className={styles.phoneBarGroup}>
                        <div className={styles.phoneBarTrack}>
                          <div className={styles.phoneBarFill} style={{ height: "50%" }} />
                        </div>
                        <span className={styles.phoneBarLabel}>Jun</span>
                      </div>
                    </div>
                  </div>

                  {/* Sparkline cards */}
                  <div className={styles.sparkRow}>
                    {/* Income */}
                    <div className={styles.sparkCard}>
                      <span className={styles.sparkLabel}>Income</span>
                      <h5 className={styles.sparkValue} style={{ color: "#10b981" }}>$453.00</h5>
                      {/* Sparkline SVG line */}
                      <svg width="60" height="20" viewBox="0 0 60 20" className={styles.sparkline}>
                        <path d="M 0 15 Q 15 5 30 12 T 60 4" fill="none" stroke="#10b981" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Spend */}
                    <div className={styles.sparkCard}>
                      <span className={styles.sparkLabel}>Spend</span>
                      <h5 className={styles.sparkValue} style={{ color: "#ef4444" }}>$453.00</h5>
                      {/* Sparkline SVG line */}
                      <svg width="60" height="20" viewBox="0 0 60 20" className={styles.sparkline}>
                        <path d="M 0 8 Q 15 18 30 10 T 60 16" fill="none" stroke="#ef4444" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>

                  {/* Phone Tabbar */}
                  <div className={styles.phoneTabbar}>
                    <span className={styles.tabIcon}>🏠<span className={styles.tabLabel}>Home</span></span>
                    <span className={styles.tabIcon}>💳<span className={styles.tabLabel}>Card</span></span>
                    <span className={`${styles.tabIcon} ${styles.tabIconActive}`}>🔄<span className={styles.tabLabel}>Tx</span></span>
                    <span className={styles.tabIcon}>👤<span className={styles.tabLabel}>Profile</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SUBSECTION 3: No Traditional Branches
            ========================================== */}
        <div className={styles.subSection} style={{ borderBottom: "none", paddingBottom: 0 }}>
          <div className={styles.gridTwoCol} style={{ direction: "rtl" }}>
            {/* Column 1: Copy (L-R reset for text styling inside) */}
            <div className={`${styles.copyCol} animate-fade-in-up`} style={{ direction: "ltr" }}>
              <h2 className={styles.sectionTitle}>
                No traditional branches
              </h2>
              <p className={styles.sectionSubtitle}>
                Our Digital Banking out-of-the-box helps you to accelerate
                innovation while reducing risks and optimising operational costs for
                a seamless branchless experience.
              </p>
              <div className={styles.checklistGroup}>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Branchless & Paperless Banking</span>
                </div>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Digital Transformation Capability</span>
                </div>
                <div className={styles.checkItem}>
                  <CheckCircleIcon size={18} color="#0082f3" />
                  <span className={styles.checkText}>Optimized, Adoptable and Scalable</span>
                </div>
              </div>
            </div>

            {/* Column 2: iPhone 3 (Profile screen) */}
            <div className={`${styles.phoneCol} animate-scale-up`} style={{ direction: "ltr" }}>
              <div className={styles.iphone}>
                <div className={styles.dynamicIsland} />
                <div className={styles.iphoneScreen}>
                  {/* Profile Header section */}
                  <div className={styles.phoneProfileHeader}>
                    <Image
                      src="/avatar_toni.png"
                      alt="Toni Kross"
                      width={52}
                      height={52}
                      className={styles.profileAvatar}
                    />
                    <h4 className={styles.profileName}>Toni Kross</h4>
                    <p className={styles.profileEmail}>tonikross@gmail.com</p>
                  </div>

                  {/* Settings list options */}
                  <div className={styles.settingsList}>
                    {/* Item 1 */}
                    <div className={styles.settingItem}>
                      <span className={styles.settingIcon}>👤</span>
                      <span className={styles.settingText}>Profile setting</span>
                      <span className={styles.settingArrow}>›</span>
                    </div>

                    {/* Item 2 */}
                    <div className={styles.settingItem}>
                      <span className={styles.settingIcon}>⚙️</span>
                      <span className={styles.settingText}>Setting</span>
                      <span className={styles.settingArrow}>›</span>
                    </div>

                    {/* Item 3 */}
                    <div className={styles.settingItem}>
                      <span className={styles.settingIcon}>🎧</span>
                      <span className={styles.settingText}>Support</span>
                      <span className={styles.settingArrow}>›</span>
                    </div>

                    {/* Item 4 */}
                    <div className={styles.settingItem}>
                      <span className={styles.settingIcon}>🚪</span>
                      <span className={styles.settingText}>Sign out</span>
                      <span className={styles.settingArrow}>›</span>
                    </div>
                  </div>

                  {/* Phone Tabbar */}
                  <div className={styles.phoneTabbar}>
                    <span className={styles.tabIcon}>🏠<span className={styles.tabLabel}>Home</span></span>
                    <span className={styles.tabIcon}>💳<span className={styles.tabLabel}>Card</span></span>
                    <span className={styles.tabIcon}>🔄<span className={styles.tabLabel}>Tx</span></span>
                    <span className={`${styles.tabIcon} ${styles.tabIconActive}`}>👤<span className={styles.tabLabel}>Profile</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
