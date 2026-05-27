"use client";

import React from "react";
import { GlassCard } from "@/components/ui/GlassCard/GlassCard";
import { ArrowRightIcon } from "@/components/icons/BankIcons";
import { Badge } from "@/components/ui/Badge/Badge";
import styles from "./Solutions.module.css";

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  description: string;
  href?: string;
  glowColor?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  badge,
  description,
  href = "#",
  glowColor = "rgba(0, 130, 243, 0.15)",
}) => {
  return (
    <GlassCard className={styles.card} glow={true} glowColor={glowColor}>
      {/* Icon Area with backing ambient circular shade */}
      <div className={styles.iconWrapper}>
        <div className={styles.iconGlow} style={{ backgroundColor: glowColor }} />
        <div className={styles.iconContainer}>{icon}</div>
      </div>

      {/* Heading with potential badge */}
      <div className={styles.titleRow}>
        <h4 className={styles.cardTitle}>{title}</h4>
        {badge && <Badge variant="primary" className={styles.cardBadge}>{badge}</Badge>}
      </div>

      {/* Description */}
      <p className={styles.cardDescription}>{description}</p>

      {/* CTA link */}
      <a href={href} className={styles.learnMore}>
        LEARN MORE <ArrowRightIcon size={12} className={styles.arrow} />
      </a>
    </GlassCard>
  );
};
