import React from 'react';

interface DoorNowhereProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function DoorNowhere({
  size = 160,
  ...props
}: DoorNowhereProps) {
  return (
    <svg
      aria-label="Door to nowhere illustration"
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
        stroke="url(#paint0_linear_633_127)"
        strokeWidth="2"
        width="108"
        x="26"
        y="6"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_633_127"
          x1="26"
          x2="134"
          y1="6"
          y2="154"
        >
          <stop offset="0.0739185" stopColor="#52525B" />
          <stop offset="0.559254" stopColor="#D4D4D8" />
          <stop offset="0.975531" stopColor="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
