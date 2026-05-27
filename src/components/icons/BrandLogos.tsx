import React from "react";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

// 1. SHELLS
export const ShellsLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 120 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Abstract spiral shell logo icon */}
    <circle
      cx="14"
      cy="14"
      r="10"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4 2"
    />
    <circle cx="14" cy="14" r="5" stroke={color} strokeWidth="2" />
    <text
      x="32"
      y="19"
      fill={color}
      fontSize="14"
      fontWeight="700"
      letterSpacing="0.1em"
      fontFamily="sans-serif"
    >
      SHELLS
    </text>
  </svg>
);

// 2. SmartFinder
export const SmartFinderLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 150 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Target/compass icon */}
    <polygon points="14,4 20,20 14,16 8,20" stroke={color} strokeWidth="2" />
    <text
      x="30"
      y="19"
      fill={color}
      fontSize="13"
      fontWeight="700"
      fontFamily="sans-serif"
      letterSpacing="0.02em"
    >
      SmartFinder
    </text>
  </svg>
);

// 3. Zoomerr
export const ZoomerrLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 120 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Lightning bolt icon */}
    <path d="M12,4 L6,14 H14 L8,24 L18,12 H10 L12,4" fill={color} />
    <text
      x="28"
      y="19"
      fill={color}
      fontSize="14"
      fontWeight="700"
      letterSpacing="-0.03em"
      fontFamily="sans-serif"
    >
      Zoomerr
    </text>
  </svg>
);

// 4. ArtVenue
export const ArtVenueLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 120 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Intersecting layered parallelograms */}
    <path
      d="M4,18 L12,6 L20,18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8,22 L16,10 L24,22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    <text
      x="32"
      y="19"
      fill={color}
      fontSize="13"
      fontWeight="700"
      fontFamily="sans-serif"
      letterSpacing="0.05em"
    >
      ArtVenue
    </text>
  </svg>
);

// 5. Kontrastr
export const KontrastrLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 120 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Half-filled circle representing contrast */}
    <path d="M14,4 A10,10 0 0,0 14,24 V4 Z" fill={color} />
    <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2" />
    <text
      x="30"
      y="19"
      fill={color}
      fontSize="13"
      fontWeight="500"
      letterSpacing="0.02em"
      fontFamily="sans-serif"
    >
      kontrastr
    </text>
  </svg>
);

// 6. WAVESMARATHON
export const WavesMarathonLogo: React.FC<LogoProps> = ({
  color = "currentColor",
  ...props
}) => (
  <svg
    height="24"
    viewBox="0 0 180 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Sine waves icon */}
    <path
      d="M4,14 Q8,8 12,14 T20,14"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M4,18 Q8,12 12,18 T20,18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      opacity="0.5"
    />
    <text
      x="26"
      y="18"
      fill={color}
      fontSize="11"
      fontWeight="800"
      letterSpacing="0.12em"
      fontFamily="sans-serif"
    >
      WAVESMARATHON
    </text>
  </svg>
);
