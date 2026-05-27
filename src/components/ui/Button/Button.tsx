import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "cyan-link";
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case "outline":
        return styles.outline;
      case "cyan-link":
        return styles.cyanLink;
      default:
        return styles.primary;
    }
  };

  return (
    <button
      className={`${styles.button} ${getVariantClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
