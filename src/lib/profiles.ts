'use server';

import { revalidatePath } from 'next/cache';

import { createClient } from '@/utils/supabase/server';

// ===== READ OPERATIONS =====

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

// ===== UPDATE OPERATIONS =====

export async function updateUsername(userId: string, newUsername: string) {
  // Validate username format
  if (!newUsername.trim() || newUsername.length < 2) {
    return { success: false, error: 'Username must be at least 2 characters' };
  }

  const supabase = await createClient();

  // Check if username is already taken
  const { data: existing } = await supabase
    .from('profiles')
    .select('id')
    .eq('username', newUsername)
    .neq('id', userId)
    .maybeSingle();

  if (existing) {
    return { success: false, error: 'Username already taken' };
  }

  // Update username
  const { error } = await supabase
    .from('profiles')
    .update({ username: newUsername })
    .eq('id', userId);

  if (error) {
    return { success: false, error: 'Failed to update username' };
  }

  revalidatePath('/[username]/settings', 'page');

  return { success: true, newUsername };
}

export async function updateEmail(newEmail: string) {
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newEmail)) {
    return { success: false, error: 'Please enter a valid email address' };
  }

  // TODO: should we use zod to validate the email?

  const supabase = await createClient();

  // Update email through Supabase Auth
  // This will send a confirmation email to the new address
  const { error } = await supabase.auth.updateUser({
    email: newEmail,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return {
    success: true,
    message: 'Check your new email address for a confirmation link',
  };
}
