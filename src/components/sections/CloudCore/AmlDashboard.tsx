"use client";

import React, { useState } from "react";
import styles from "./CloudCore.module.css";
import { Badge } from "@/components/ui/Badge/Badge";

type SegmentName = "Segment 1" | "Segment 2" | "Segment 3";

export const AmlDashboard: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<SegmentName | null>(null);

  const getSegmentText = () => {
    switch (hoveredSegment) {
      case "Segment 1":
        return "450 Suspicious Cases (45%)";
      case "Segment 2":
        return "350 Reviewed Cases (35%)";
      case "Segment 3":
        return "200 Closed Cases (20%)";
      default:
        return "Hover segments for details";
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Dashboard Top Header */}
      <div className={styles.dashHeader}>
        <div>
          <h4 className={styles.dashTitle}>AML Dashboard</h4>
          <span className={styles.dashSub}>XXXXXXXXXX</span>
        </div>
        <div className={styles.windowActions}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      </div>

      {/* Grid Layout inside Dashboard */}
      <div className={styles.dashGrid}>
        {/* Left Side: Stats and Donut Chart */}
        <div className={styles.dashLeft}>
          <div className={styles.statsRow}>
            {/* Stat Item 1 */}
            <div className={styles.statBox}>
              <div className={styles.statHeader}>
                <span className={styles.pulseRed} />
                <span className={styles.statLabel}>Total STR (Suspicious Transaction Report)</span>
              </div>
              <h3 className={styles.statValue}>450</h3>
            </div>

            {/* Stat Item 2 */}
            <div className={styles.statBox}>
              <div className={styles.statHeader}>
                <span className={styles.pulseYellow} />
                <span className={styles.statLabel}>Days Pending for AML Process</span>
              </div>
              <h3 className={styles.statValue}>3</h3>
            </div>
          </div>

          {/* Donut Chart Container */}
          <div className={styles.donutCard}>
            <h5 className={styles.cardHeaderTitle}>Suspicious Transactions as of 10-01-2022</h5>
            <div className={styles.donutArea}>
              <div className={styles.donutSvgWrapper}>
                <svg width="160" height="160" viewBox="0 0 160 160" className={styles.donutSvg}>
                  {/* Background Track */}
                  <circle cx="80" cy="80" r="60" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="16" />
                  
                  {/* Segment 1: Red (45%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#ef4444"
                    strokeWidth={hoveredSegment === "Segment 1" ? "20" : "16"}
                    strokeDasharray="170 377"
                    strokeDashoffset="0"
                    className={styles.donutSegment}
                    onMouseEnter={() => setHoveredSegment("Segment 1")}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />
                  
                  {/* Segment 2: Green (35%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#10b981"
                    strokeWidth={hoveredSegment === "Segment 2" ? "20" : "16"}
                    strokeDasharray="132 377"
                    strokeDashoffset="-170"
                    className={styles.donutSegment}
                    onMouseEnter={() => setHoveredSegment("Segment 2")}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />

                  {/* Segment 3: Blue (20%) */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="transparent"
                    stroke="#0082f3"
                    strokeWidth={hoveredSegment === "Segment 3" ? "20" : "16"}
                    strokeDasharray="75 377"
                    strokeDashoffset="-302"
                    className={styles.donutSegment}
                    onMouseEnter={() => setHoveredSegment("Segment 3")}
                    onMouseLeave={() => setHoveredSegment(null)}
                  />
                </svg>
                {/* Donut Center */}
                <div className={styles.donutCenter}>
                  <span className={styles.donutCenterVal}>1,000</span>
                  <span className={styles.donutCenterLbl}>Total</span>
                </div>
              </div>

              {/* Chart Legend */}
              <div className={styles.donutLegend}>
                <div className={styles.legendItem} onMouseEnter={() => setHoveredSegment("Segment 1")} onMouseLeave={() => setHoveredSegment(null)}>
                  <span className={styles.legendColor} style={{ backgroundColor: "#ef4444" }} />
                  <span className={styles.legendName}>Review 1</span>
                </div>
                <div className={styles.legendItem} onMouseEnter={() => setHoveredSegment("Segment 2")} onMouseLeave={() => setHoveredSegment(null)}>
                  <span className={styles.legendColor} style={{ backgroundColor: "#10b981" }} />
                  <span className={styles.legendName}>Review 2</span>
                </div>
                <div className={styles.legendItem} onMouseEnter={() => setHoveredSegment("Segment 3")} onMouseLeave={() => setHoveredSegment(null)}>
                  <span className={styles.legendColor} style={{ backgroundColor: "#0082f3" }} />
                  <span className={styles.legendName}>Review 3</span>
                </div>
                <p className={styles.hoverFeedback}>{getSegmentText()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: STR Summary Bar Chart */}
        <div className={styles.dashRight}>
          <div className={styles.barCard}>
            <h5 className={styles.cardHeaderTitle}>STR Summary</h5>
            <div className={styles.barChartContainer}>
              <div className={styles.yAxis}>
                <span>600</span>
                <span>400</span>
                <span>200</span>
                <span>0</span>
              </div>
              <div className={styles.chartBars}>
                {/* Bar 1 */}
                <div className={styles.barGroup}>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ height: "45%", backgroundColor: "#ef4444" }} />
                  </div>
                  <span className={styles.barLabel}>5 Nov</span>
                </div>
                {/* Bar 2 */}
                <div className={styles.barGroup}>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ height: "70%", backgroundColor: "#0082f3" }} />
                  </div>
                  <span className={styles.barLabel}>6 Nov</span>
                </div>
                {/* Bar 3 */}
                <div className={styles.barGroup}>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ height: "60%", backgroundColor: "#10b981" }} />
                  </div>
                  <span className={styles.barLabel}>7 Nov</span>
                </div>
              </div>
            </div>
            {/* Legend info */}
            <div className={styles.barLegend}>
              <div className={styles.barLegendItem}>
                <span className={styles.barLegendDot} style={{ backgroundColor: "#0082f3" }} />
                <span>Total Created Cases</span>
                <span className={styles.barLegendVal}>322</span>
              </div>
              <div className={styles.barLegendItem}>
                <span className={styles.barLegendDot} style={{ backgroundColor: "#10b981" }} />
                <span>Total Reported Cases</span>
                <span className={styles.barLegendVal}>198</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AML Report Table at Bottom */}
      <div className={styles.tableCard}>
        <h5 className={styles.tableHeaderTitle}>AML Report</h5>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>AML Case ID</th>
                <th>Branch ID</th>
                <th>Identified Date</th>
                <th>Date of Transaction</th>
                <th>State of Transaction</th>
                <th>Amount of Transaction</th>
                <th>Type of Transaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>223</td>
                <td>Branch 1</td>
                <td>02-08-2022</td>
                <td>27-02-2021</td>
                <td><Badge variant="success">Active</Badge></td>
                <td>$50</td>
                <td>FD</td>
              </tr>
              <tr>
                <td>150</td>
                <td>Branch 3</td>
                <td>07-06-2022</td>
                <td>07-10-2021</td>
                <td><Badge variant="success">Active</Badge></td>
                <td>$80</td>
                <td>SB</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Branch 4</td>
                <td>27-10-2022</td>
                <td>17-10-2021</td>
                <td><Badge variant="success">Active</Badge></td>
                <td>$25</td>
                <td>FD</td>
              </tr>
              <tr>
                <td>108</td>
                <td>Branch 8</td>
                <td>05-04-2022</td>
                <td>20-10-2021</td>
                <td><Badge variant="danger">Blocked</Badge></td>
                <td>$32</td>
                <td>SB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
