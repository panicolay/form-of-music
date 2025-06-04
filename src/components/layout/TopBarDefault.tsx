'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Popover } from 'radix-ui';
import { useRef } from 'react';

import { Button } from '@/components/ui';
import { useUser } from '@/context/UserContext';

import Fom from '../svg/Fom';

export default function TopBarDefault() {
  const user = useUser();
  const profileRef = useRef<HTMLAnchorElement>(null);

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
        <Popover.Root>
          <Popover.Trigger asChild>
            <button
              aria-label="Open user menu"
              className="border-l border-zinc-500 p-0 cursor-pointer bg-transparent"
              type="button"
            >
              <Image
                alt={user.username || 'User avatar'}
                height={56}
                src={user.avatar_url || '/avatars/defaults/avatar-o.png'}
                width={56}
              />
            </button>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              align="end"
              alignOffset={8}
              sideOffset={8}
              onOpenAutoFocus={(event) => {
                event.preventDefault();
                profileRef.current?.focus();
              }}
            >
              <div
                className="
                  flex flex-col
                  w-50
                  bg-black
                  border border-zinc-500
                  divide-y divide-zinc-500
                "
              >
                <Button
                  ref={profileRef}
                  className="w-full"
                  href={`/${user.username}`}
                >
                  Profile
                </Button>
                <Button className="w-full" href={`/${user.username}/settings`}>
                  Settings
                </Button>
                <form action="/logout" className="w-full">
                  <Button className="w-full" type="submit">
                    Logout
                  </Button>
                </form>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      ) : (
        <Button className="border-l" href="/login">
          Login
        </Button>
      )}
    </header>
  );
}
