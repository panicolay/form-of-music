'use server';

import { createClient } from '@/utils/supabase/server';

import { validateLoginForm } from './validation';

export async function login(email: string, password: string, token: string) {
  const validation = validateLoginForm(email, password);
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
