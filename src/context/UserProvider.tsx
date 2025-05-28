'use client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { useEffect, useState, type ReactNode } from 'react';

import type { ExtendedUser } from '@/types/ExtendedUser';
import { createClient } from '@/utils/supabase/client';

import { UserContext } from './UserContext';

interface UserProviderProps {
  user: SupabaseUser | null;
  children: ReactNode;
}

export default function UserProvider({ user, children }: UserProviderProps) {
  const [extendedUser, setExtendedUser] = useState<ExtendedUser | null>(null);

  useEffect(() => {
    if (!user) {
      setExtendedUser(null);
      return;
    }

    const supabase = createClient();

    supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', user.id)
      .single()
      .then(({ data }) => {
        setExtendedUser({
          id: user.id,
          email: user.email ?? '',
          username: data?.username ?? null,
          avatar_url: data?.avatar_url ?? null,
        });
      });
  }, [user]);

  return (
    <UserContext.Provider value={extendedUser}>{children}</UserContext.Provider>
  );
}
