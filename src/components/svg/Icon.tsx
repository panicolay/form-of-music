import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export default function Icon({
  size = 24,
  color = 'currentColor',
  className = '',
  ...props
}: IconProps) {
  return (
    <svg
      className={className}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      width={size}
      {...props}
    />
  );
}
