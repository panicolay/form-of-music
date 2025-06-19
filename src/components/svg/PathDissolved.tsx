import React from 'react';

interface PathDissolvedProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function PathDissolved({
  size = 160,
  ...props
}: PathDissolvedProps) {
  return (
    <svg
      aria-label="Dissolved path illustration"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 160 160"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M134 154H26L62 6H98L134 154Z"
        stroke="url(#paint0_linear_633_142)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_633_142"
          x1="80"
          x2="80"
          y1="25.5"
          y2="196.5"
        >
          <stop offset="0.0982039" />
          <stop offset="0.502118" stopColor="#E4E4E7" />
          <stop offset="0.887999" stopColor="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
