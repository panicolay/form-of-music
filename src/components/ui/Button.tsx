import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center px-4 h-14
    font-poppins text-sm uppercase text-zinc-200
    border-zinc-200
    cursor-pointer
    hover:bg-zinc-800 hover:text-zinc-50
    focus:outline-none focus-visible:underline
    focus:bg-zinc-800 focus:text-zinc-50
    active:bg-zinc-950 active:text-zinc-50
    transition-colors duration-120 ease-in-out
  `;

  if (href) {
    return (
      <Link className={`${baseStyles} ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
}
