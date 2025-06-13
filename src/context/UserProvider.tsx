'use client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { useEffect, useState, type ReactNode } from 'react';

import { createExtendedUser } from '@/lib/users';
import type { ExtendedUser } from '@/types/ExtendedUser';
import { createClient } from '@/utils/supabase/client';

// TODO: create index for types? utils? lib?

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

    let cancelled = false;

    const supabase = createClient();
    supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', user.id)
      .single()
      .then(({ data, error }) => {
        if (cancelled) return;

        if (error) {
          console.error('Error fetching profile:', error);
          return;
        }
        setExtendedUser(createExtendedUser(user, data));
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  return (
    <UserContext.Provider value={extendedUser}>{children}</UserContext.Provider>
  );
}
