'use client';

import type { User } from '@supabase/supabase-js';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui';

import Fom from '../svg/Fom';

interface TopBarProps {
  user: User | null;
}

export default function TopBar({ user }: TopBarProps) {
  const pathname = usePathname();

  return (
    <div
      className="
        w-full flex justify-between items-center
        bg-zinc-950
        border-b border-zinc-200
    "
    >
      <Link className="m-4" href="/">
        <Fom className="w-12 h-6" />
      </Link>
      {user ? (
        <form action="/logout">
          <Button className="border-l border-zinc-200" type="submit">
            Logout
          </Button>
        </form>
      ) : (
        <Button className="border-l border-zinc-200" href="/login">
          Login
        </Button>
      )}
    </div>
  );
}
