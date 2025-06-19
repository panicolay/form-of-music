import React from 'react';

interface DoorFadedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function DoorFaded({ size = 160, ...props }: DoorFadedProps) {
  return (
    <svg
      aria-label="Faded door illustration"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 160 160"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        height="148"
        stroke="url(#paint0_linear_633_259)"
        strokeWidth="2"
        width="108"
        x="26"
        y="6"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_633_259"
          x1="26"
          x2="134"
          y1="85.5"
          y2="86"
        >
          <stop stopColor="#D4D4D8" />
          <stop offset="0.37" stopColor="#52525B" />
          <stop offset="0.740474" />
        </linearGradient>
      </defs>
    </svg>
  );
}
