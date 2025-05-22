'use client';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

export const UserContext = createContext<SupabaseUser | null>(null);

export function useUser() {
  return useContext(UserContext);
}
