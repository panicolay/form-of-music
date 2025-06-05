import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  Ref,
} from 'react';

const buttonVariants = cva(
  `
    inline-flex items-center px-4 h-14
    font-poppins text-sm uppercase
    cursor-pointer
    transition-colors duration-120 ease-in-out
    focus:outline-none focus-visible:underline`,
  {
    variants: {
      variant: {
        default: `
          text-zinc-200 border-zinc-500
          hover:bg-zinc-800 hover:text-zinc-50
          focus:bg-zinc-800 focus:text-zinc-50
          active:bg-zinc-900 active:text-zinc-50
        `,
        destructive: `
          text-rose-500 border-rose-500
          hover:bg-rose-950/50 hover:text-rose-500
          focus:bg-rose-950/50 focus:text-rose-500
          active:bg-rose-950/25 active:text-rose-500
        `,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type ButtonProps =
  | ({
      ref?: Ref<HTMLButtonElement>;
      variant?: 'default' | 'destructive';
    } & ButtonHTMLAttributes<HTMLButtonElement> &
      VariantProps<typeof buttonVariants> & {
        children: ReactNode;
        className?: string;
      })
  | ({
      href: string;
      ref?: Ref<HTMLAnchorElement>;
      variant?: 'default' | 'destructive';
    } & AnchorHTMLAttributes<HTMLAnchorElement> &
      VariantProps<typeof buttonVariants> & {
        children: ReactNode;
        className?: string;
      });

function Button(props: ButtonProps) {
  const {
    children,
    className = '',
    href,
    ref,
    variant = 'default',
    ...rest
  } = props as any;

  if (href) {
    // On ne passe que les props valides pour <a>
    const { target, rel, ...anchorProps } =
      rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        ref={ref as Ref<HTMLAnchorElement>}
        className={buttonVariants({ variant, className })}
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
      className={buttonVariants({ variant, className })}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
