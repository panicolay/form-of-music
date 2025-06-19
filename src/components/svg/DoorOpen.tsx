import React from 'react';

interface DoorOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function DoorOpen({ size = 160, ...props }: DoorOpenProps) {
  return (
    <svg
      aria-label="Open door illustration"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 160 160"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M26 154L108 132.028V6"
        stroke="url(#paint0_linear_633_224)"
        strokeWidth="2"
      />
      <path
        d="M134 154V6H26V154H134Z"
        stroke="url(#paint0_linear_633_224)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_633_224"
          x1="26"
          x2="139.316"
          y1="6"
          y2="123.902"
        >
          <stop offset="0.0739185" stopColor="#52525B" />
          <stop offset="0.559254" stopColor="#D4D4D8" />
          <stop offset="0.975531" stopColor="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
