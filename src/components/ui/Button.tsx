import Link from 'next/link';
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  Ref,
} from 'react';

type ButtonProps =
  | ({
      ref?: Ref<HTMLButtonElement>;
    } & ButtonHTMLAttributes<HTMLButtonElement> & {
        children: ReactNode;
        className?: string;
      })
  | ({
      href: string;
      ref?: Ref<HTMLAnchorElement>;
    } & AnchorHTMLAttributes<HTMLAnchorElement> & {
        children: ReactNode;
        className?: string;
      });

function Button(props: ButtonProps) {
  const { children, className = '', href, ref, ...rest } = props as any;
  const baseStyles = `
    inline-flex items-center px-4 h-14
    font-poppins text-sm uppercase text-zinc-200
    border-zinc-500
    cursor-pointer
    hover:bg-zinc-800 hover:text-zinc-50
    focus:outline-none focus-visible:underline
    focus:bg-zinc-800 focus:text-zinc-50
    active:bg-zinc-900 active:text-zinc-50
    transition-colors duration-120 ease-in-out
  `;

  if (href) {
    // On ne passe que les props valides pour <a>
    const { target, rel, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        className={`${baseStyles} ${className}`}
        href={href}
        rel={rel}
        target={target}
        {...anchorProps}
      >
        {children}
      </Link>
    );
  }

  // On ne passe que les props valides pour <button>
  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      className={`${baseStyles} ${className}`}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
