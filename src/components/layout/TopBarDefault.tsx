'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { useUser } from '@/context/UserContext';

import Fom from '../svg/Fom';

export default function TopBarDefault() {
  const user = useUser();

  return (
    <header
      className="
        w-full flex justify-between items-center
        bg-black
        border-b border-zinc-500
    "
    >
      <Link href="/">
        <Fom className="m-4 w-12 h-6" />
      </Link>
      {user ? (
        <Link className="border-l border-zinc-500" href={`/${user.username}`}>
          <Image
            alt={user.username || 'User avatar'}
            height={56}
            src={user.avatar_url || '/avatars/defaults/avatar-o.png'}
            width={56}
          />
        </Link>
      ) : (
        <Button className="border-l" href="/login">
          Login
        </Button>
      )}
    </header>
  );
}
