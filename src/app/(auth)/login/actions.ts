'use server';

import { createClient } from '@/utils/supabase/server';

import { loginSchema } from './validation';

export async function login(email: string, password: string) {
  const result = loginSchema.safeParse({ email, password });
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return {
      errors: {
        email: errors.email?.[0] || '',
        password: errors.password?.[0] || '',
        global: '',
      },
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      errors: {
        email: '',
        password: '',
        global: 'Email or password incorrect',
      },
    };
  }

  return { errors: { email: '', password: '', global: '' } };
}
