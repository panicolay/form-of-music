'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui';

import Fom from '../svg/Fom';

export default function TopBarProcess() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  return (
    <header
      className="
        fixed top-0 z-50
        w-full flex justify-between items-center
        bg-black
        border-b border-zinc-500
    "
    >
      <Link href="/">
        <Fom className="m-4 w-12 h-6" />
      </Link>
      <Button
        className="border-l"
        type="button"
        onClick={() => {
          if (from && from.startsWith('/')) {
            router.push(from);
          } else {
            router.push('/');
          }
        }}
      >
        Close
      </Button>
    </header>
  );
}
