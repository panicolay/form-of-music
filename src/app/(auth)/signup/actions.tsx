'use server';

import { createClient } from '@/utils/supabase/server';

import { validateSignupForm } from './validation';

export async function signup(email: string, password: string, token: string) {
  const validation = validateSignupForm(email, password);
  if (!validation.isValid) {
    return { errors: validation };
  }

  // Captcha verification
  const secretKey = process.env.TURNSTILE_SECRET_KEY!;
  const verifyRes = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    }
  );
  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return {
      errors: {
        email: '',
        password: '',
        global: 'Your form was received, but not understood. Please try again.',
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
        global: "You're not unknown. Try logging in.",
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
