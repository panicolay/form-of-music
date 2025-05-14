'use client';

import type { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui';

interface TopBarProps {
  user: User | null;
}

export default function TopBar({ user }: TopBarProps) {
  const pathname = usePathname();

  if (pathname === '/login' || pathname === '/signup') return null;

  return (
    <div
      className="
        w-full flex justify-between items-center
        bg-zinc-950
        border-b border-zinc-200
    "
    >
      <Button href="/">FOM</Button>
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
