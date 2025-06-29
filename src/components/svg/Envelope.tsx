import React from 'react';

interface EnvelopeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Envelope({ size = 160, ...props }: EnvelopeProps) {
  return (
    <svg
      aria-label="Envelope illustration"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 160 160"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 26 L154 26 L154 134 L6 134 Z"
        fill="none"
        stroke="url(#paint0_linear_634_288)"
        strokeWidth="2"
      />
      <path
        d="M6 26 L80 96 L154 26"
        fill="none"
        stroke="url(#paint0_linear_634_288)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_634_288"
          x1="154"
          x2="6"
          y1="26"
          y2="134"
        >
          <stop offset="0.0739185" stopColor="#52525B" />
          <stop offset="0.559254" stopColor="#D4D4D8" />
          <stop offset="0.975531" stopColor="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
