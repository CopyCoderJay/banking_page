import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "warning" | "success";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "secondary":
        return styles.secondary;
      case "danger":
        return styles.danger;
      case "warning":
        return styles.warning;
      case "success":
        return styles.success;
      default:
        return styles.primary;
    }
  };

  return (
    <span className={`${styles.badge} ${getVariantClass()} ${className}`}>
      {children}
    </span>
  );
};
