import React from "react";

// Types for customizable SVG icons
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

// Chevron Down Icon
export const ChevronDownIcon: React.FC<IconProps> = ({
  size = 14,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Right Arrow Icon
export const ArrowRightIcon: React.FC<IconProps> = ({
  size = 16,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Bell Icon (Notification)
export const BellIcon: React.FC<IconProps> = ({
  size = 18,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.0"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

// Fund Transfer Icon (Two curved arrows in opposite direction)
export const TransferIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17 3L21 7L17 11" />
    <path d="M3 7H21" />
    <path d="M7 21L3 17L7 13" />
    <path d="M21 17H3" />
  </svg>
);

// Wallet / Add Money Icon
export const WalletIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// Grid Icon (More)
export const GridIcon: React.FC<IconProps> = ({
  size = 20,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

// Checklist Checkmark
export const CheckCircleIcon: React.FC<IconProps> = ({
  size = 22,
  color = "#0082f3",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    {...props}
  >
    <circle cx="12" cy="12" r="10" fill="rgba(0, 130, 243, 0.1)" />
    <polyline
      points="8 12 11 15 16 9"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Angled Arrow Up-Right (Recent activity / purple card)
export const DiagonalArrowIcon: React.FC<IconProps> = ({
  size = 18,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ----------------------------------------------------
   SOLUTION ICONS (Custom abstract premium geometry)
   ---------------------------------------------------- */

// 1. Spiral geometry (Core Banking CB7)
export const SpiralIcon: React.FC<IconProps> = ({
  size = 48,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M24 24C24 21 22 19 19.5 19C16.5 19 14.5 21.5 14.5 24.5C14.5 28.5 18 31.5 22 31.5C27 31.5 30.5 27.5 30.5 22.5C30.5 16.5 26 12.5 20.5 12.5C13.5 12.5 8.5 17.5 8.5 24.5C8.5 32.5 15 37.5 22.5 37.5C31 37.5 36.5 31.5 36.5 24" />
    {/* Concentric rings to make it feel extremely detailed */}
    <circle cx="24" cy="24" r="2" fill={color} />
    <path d="M12 12C15.5 8.5 20.5 7.5 25 9.5" opacity="0.5" />
    <path d="M36 36C32.5 39.5 27.5 40.5 23 38.5" opacity="0.5" />
  </svg>
);

// 2. Interconnected nodes (Digital Banking N7)
export const NodesIcon: React.FC<IconProps> = ({
  size = 48,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    {...props}
  >
    {/* Main Cross-link structure */}
    <path d="M24 8V40M8 24H40" strokeDasharray="3 3" />
    <circle cx="24" cy="24" r="4" strokeWidth="2" />
    
    {/* Four surrounding orbit node circles */}
    <circle cx="24" cy="8" r="3" fill="none" strokeWidth="2" />
    <circle cx="24" cy="40" r="3" fill="none" strokeWidth="2" />
    <circle cx="8" cy="24" r="3" fill="none" strokeWidth="2" />
    <circle cx="40" cy="24" r="3" fill="none" strokeWidth="2" />
    
    {/* Diagonals forming symmetric cross nodes */}
    <path d="M12 12L20 20M36 36L28 28M36 12L28 20M12 36L20 28" />
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="36" cy="36" r="2.5" />
    <circle cx="36" cy="12" r="2.5" />
    <circle cx="12" cy="36" r="2.5" />
  </svg>
);

// 3. Orbit/Atomic structure (Open Banking)
export const AtomicIcon: React.FC<IconProps> = ({
  size = 48,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    {...props}
  >
    {/* Three intersecting ellipses */}
    <ellipse cx="24" cy="24" rx="6" ry="18" transform="rotate(30 24 24)" />
    <ellipse cx="24" cy="24" rx="6" ry="18" transform="rotate(-30 24 24)" />
    <ellipse cx="24" cy="24" rx="6" ry="18" transform="rotate(90 24 24)" />
    
    {/* Central nucleus */}
    <circle cx="24" cy="24" r="3" fill={color} />
    
    {/* Small electrons floating on bounds */}
    <circle cx="33" cy="10" r="2" fill={color} />
    <circle cx="15" cy="38" r="2" fill={color} />
    <circle cx="38" cy="24" r="2" fill={color} />
  </svg>
);

// 4. Intersecting vectors (Loan Origination System)
export const VectorsIcon: React.FC<IconProps> = ({
  size = 48,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    {...props}
  >
    {/* Symmetric star outline composed of dual curves intersecting */}
    <path d="M24 4C24 16 16 24 4 24C16 24 24 32 24 44C24 32 32 24 44 24C32 24 24 16 24 4Z" strokeWidth="2" />
    <path d="M12 12C18 18 30 18 36 12" strokeDasharray="2 2" />
    <path d="M12 36C18 30 30 30 36 36" strokeDasharray="2 2" />
    {/* Outer boundary circles */}
    <circle cx="24" cy="24" r="16" opacity="0.3" />
  </svg>
);

// 5. Shield/Vault abstract geometry (Loan Management System)
export const VaultIcon: React.FC<IconProps> = ({
  size = 48,
  color = "currentColor",
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    {...props}
  >
    <rect x="10" y="10" width="28" height="28" rx="4" strokeWidth="2" />
    <circle cx="24" cy="24" r="8" />
    <path d="M24 16V32M16 24H32" />
    <path d="M29.66 18.34L18.34 29.66M18.34 18.34L29.66 29.66" opacity="0.5" strokeDasharray="2 2" />
    <circle cx="24" cy="24" r="2" fill={color} />
  </svg>
);

