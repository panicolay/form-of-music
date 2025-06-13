import { createClient } from '@/utils/supabase/server';

export async function getProfileByUsername(username: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, avatar_url')
    .eq('username', username)
    .maybeSingle();
  return { profile: data, error };
}

export async function getProfileById(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('profiles')
    .select('id, username, avatar_url')
    .eq('id', id)
    .single();
  return { profile: data, error };
}
