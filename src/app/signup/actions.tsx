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
  const { error, data } = await supabase.auth.signUp({ email, password });

  // Check if the user already exists and is confirmed
  if (
    !error &&
    data?.user &&
    Array.isArray(data.user.identities) &&
    data.user.identities.length === 0
  ) {
    return {
      errors: {
        email: '',
        password: '',
        global: 'This email is already registered. Please log in.',
      },
    };
  }

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
