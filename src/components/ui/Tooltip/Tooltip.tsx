import React from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  className = "",
}) => {
  return (
    <div className={`${styles.tooltipContainer} ${className}`}>
      {children}
      <div className={`${styles.tooltipBox} ${styles[position]}`}>
        {content}
        <div className={styles.arrow} />
      </div>
    </div>
  );
};
