import React from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glow = false,
  glowColor = "rgba(0, 130, 243, 0.15)",
  onClick,
  style = {},
}) => {
  const cardStyle = {
    ...style,
    "--card-glow-color": glowColor,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.card} ${glow ? styles.glow : ""} ${
        onClick ? styles.clickable : ""
      } ${className}`}
      onClick={onClick}
      style={cardStyle}
    >
      {children}
    </div>
  );
};
