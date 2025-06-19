import React from 'react';

export default function Envelope({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="160"
      viewBox="0 0 160 160"
      width="160"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M154 26L154 134L6 134L6 26M154 26L6 26M154 26L80 96L6 26"
        stroke="url(#paint0_linear_634_288)"
        stroke-width="2"
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
          <stop offset="0.0739185" stop-color="#52525B" />
          <stop offset="0.559254" stop-color="#D4D4D8" />
          <stop offset="0.975531" stop-color="#52525B" />
        </linearGradient>
      </defs>
    </svg>
  );
}
