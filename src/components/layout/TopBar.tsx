import type { User } from '@supabase/supabase-js';

import { Button } from '@/components/ui';

interface TopBarProps {
  user: User | null;
}

export default function TopBar({ user }: TopBarProps) {
  return (
    <div
      className="
        w-full flex justify-between items-center
        bg-zinc-950
        border-b border-zinc-200
    "
    >
      {user ? (
        <>
          <span className="text-zinc-200">Bienvenue, {user.email}</span>
          <form action="/logout">
            <Button type="submit">Logout</Button>
          </form>
        </>
      ) : (
        <Button href="/login">Login</Button>
      )}
    </div>
  );
}
