import type { ExtendedUser } from '../types/ExtendedUser';
import { createClient } from '../utils/supabase/server';

import { getProfileById } from './profiles';
// TODO: improve imports?

export async function getUserWithProfile(userId: string) {
  const supabase = await createClient();
  const { profile } = await getProfileById(userId);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !profile) return null;

  return {
    id: user.id,
    email: user.email ?? '',
    username: profile.username,
    avatar_url: profile.avatar_url,
  } as ExtendedUser;
}

// TODO: user plural for userS? and for profileS?
