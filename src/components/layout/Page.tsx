import { cva, type VariantProps } from 'class-variance-authority';

import {
  TopBarDefault,
  TopBarMinimal,
  TopBarProcess,
} from '@/components/layout';

const mainVariants = cva(
  // Base styles
  'px-4 py-10 space-y-10 flex flex-col',
  {
    variants: {
      width: {
        full: 'w-full',
        medium: 'max-w-md w-full mx-auto',
      },
      align: {
        center: 'items-center',
        start: 'items-start',
      },
    },
    defaultVariants: {
      width: 'full',
      align: 'start',
    },
  }
);

interface PageProps extends VariantProps<typeof mainVariants> {
  topBar?: 'default' | 'minimal' | 'process';
  children: React.ReactNode;
}

export default function Page({
  children,
  topBar = 'default',
  width = 'full',
  align = 'start',
}: PageProps) {
  const TopBar = {
    default: TopBarDefault,
    minimal: TopBarMinimal,
    process: TopBarProcess,
  }[topBar];

  return (
    <div className="flex flex-col pt-14">
      <TopBar />
      <main className={mainVariants({ width, align })}>{children}</main>
    </div>
  );
}
