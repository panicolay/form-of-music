import React from 'react';

export default function Fom({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="256"
      viewBox="0 0 512 256"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path className="fill-zinc-600" d="M512 256H256V0L384 128L512 0V256Z" />
      <circle className="fill-zinc-400" cx="256" cy="128" r="128" />
      <path
        className="fill-zinc-200"
        d="M85.3333 256H0V0H256V85.3333H170.667V170.667H85.3333V256Z"
      />
    </svg>
  );
}
