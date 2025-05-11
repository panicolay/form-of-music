import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center px-4 h-14
    font-poppins text-zinc-200 text-sm uppercase
    border-zinc-200
    cursor-pointer
    transition-colors duration-200 ease-in-out
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
