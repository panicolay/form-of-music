import React from 'react';

interface NothingProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Nothing({ size = 160, ...props }: NothingProps) {
  return (
    <svg
      aria-label="Nothing illustration"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 160 160"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 150L80.99 80.99L150 80L80.99 79.01L80 10L79.01 79.01L10 80L79.01 80.99L80 150Z"
        stroke="url(#paint0_linear_633_183)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_633_183"
          x1="150"
          x2="-17.5909"
          y1="150"
          y2="63.3862"
        >
          <stop offset="0.232161" stopColor="#52525B" />
          <stop offset="0.441712" stopColor="#D4D4D8" />
          <stop offset="0.659025" stopColor="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
