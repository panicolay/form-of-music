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
        w-full flex justify-between items-center
        bg-zinc-950
        border-b border-zinc-200
    "
    >
      <Link href="/">
        <Fom className="m-4 w-12 h-6" />
      </Link>
      <Button
        className="border-l border-zinc-200"
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
