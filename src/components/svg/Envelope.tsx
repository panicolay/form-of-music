import React from 'react';

export default function Envelope({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        className="fill-zinc-300"
        height="16"
        transform="translate(2 4)"
        width="20"
      />
      <path className="fill-zinc-200" d="M12 10L2 20H22L12 10Z" />
      <path className="fill-zinc-100" d="M12 14L2 4H22L12 14Z" />
    </svg>
  );
}
