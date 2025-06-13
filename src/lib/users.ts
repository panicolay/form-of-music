import type { User as SupabaseUser } from '@supabase/supabase-js';

import type { ExtendedUser } from '@/types/ExtendedUser';

export function createExtendedUser(
  user: SupabaseUser,
  profile: any
): ExtendedUser {
  return {
    id: user.id,
    email: user.email ?? '',
    username: profile.username,
    avatar_url: profile.avatar_url,
  };
}
