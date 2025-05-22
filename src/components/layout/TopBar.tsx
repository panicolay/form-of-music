'use client';

import Link from 'next/link';

import { Button } from '@/components/ui';
import { useUser } from '@/context/UserContext';

import Fom from '../svg/Fom';

export default function TopBar() {
  const user = useUser();

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
