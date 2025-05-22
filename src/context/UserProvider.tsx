'use client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import type { ReactNode } from 'react';

import { UserContext } from './UserContext';

interface UserProviderProps {
  user: SupabaseUser | null;
  children: ReactNode;
}

export default function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
