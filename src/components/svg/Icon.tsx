import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export default function Icon({
  size = 24,
  className = '',
  ...props
}: IconProps) {
  return (
    <svg
      className={`fill-current ${className}`}
      height={size}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    />
  );
}
