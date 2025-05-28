'use client';
import { createContext, useContext } from 'react';

import type { ExtendedUser } from '@/types/ExtendedUser';

export const UserContext = createContext<ExtendedUser | null>(null);

export function useUser() {
  return useContext(UserContext);
}
