'use server';

import { createClient } from '@/utils/supabase/server';

import { signupSchema } from './validation';

export async function signup(email: string, password: string) {
  const result = signupSchema.safeParse({ email, password });
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
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    return {
      errors: {
        email: '',
        password: '',
        global: error.message,
      },
    };
  }

  return { errors: { email: '', password: '', global: '' } };
}
