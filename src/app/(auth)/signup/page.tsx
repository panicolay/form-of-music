'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
import Turnstile from 'react-turnstile';

import { TopBarProcess } from '@/components/layout';
import { Button, Field } from '@/components/ui';
import { createClient } from '@/utils/supabase/client';

import { signup } from './actions';
import { signupSchema } from './validation';

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!;

export default function SignUp() {
  const [errors, setErrors] = useState({ email: '', password: '', global: '' });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        router.replace('/');
      } else {
        setChecking(false);
      }
    };
    checkUser();
  }, [router]);

  if (checking) {
    return null; // TODO: we could add a loader here
  }

  function validate(email: string, password: string) {
    const result = signupSchema.safeParse({ email, password });
    const newErrors = { email: '', password: '', global: '' };

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      newErrors.email = errors.email?.[0] || '';
      newErrors.password = errors.password?.[0] || '';
    }
    return newErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({ email: '', password: '', global: '' });

    if (!turnstileToken) {
      setErrors({
        email: '',
        password: '',
        global: 'What is your true nature? Please try again.',
      });
      return;
    }

    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const validationErrors = validate(email, password);
    if (validationErrors.email || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    startTransition(async () => {
      const result = await signup(email, password, turnstileToken);
      if (
        result?.errors &&
        (result.errors.email || result.errors.password || result.errors.global)
      ) {
        setErrors(result.errors);
      } else {
        router.push('/signup/verify');
      }
    });
  }

  return (
    <>
      <TopBarProcess />
      <main className="mx-4 my-10">
        <div className="max-w-md mx-auto space-y-10">
          <h2
            className="
            font-poppins font-semibold
            text-4xl uppercase
        "
          >
            Create <br />
            an account
          </h2>
          {errors.global && (
            <div
              className="p-4
          border border-rose-500
          text-rose-500 text-sm
        "
            >
              {errors.global}
            </div>
          )}
          <form
            noValidate
            className="border border-zinc-500 divide-y divide-zinc-500"
            onSubmit={handleSubmit}
          >
            <Field
              autoFocus
              required
              error={errors.email}
              label="Email"
              name="email"
              type="email"
            />
            <Field
              required
              error={errors.password}
              instruction="
            <p>Password must contain at least:</p>
            <ul class='list-disc pl-6'>
              <li>8 characters</li>
              <li>1 uppercase</li>
              <li>1 lowercase</li>
              <li>1 number</li>
            </ul>
          "
              label="Password"
              name="password"
              type="password"
            />

            <Turnstile
              className="border-none"
              refreshExpired="auto"
              sitekey={siteKey}
              onVerify={setTurnstileToken}
            />

            <div className="flex">
              <Button className="border-r" href="/">
                Cancel
              </Button>
              <Button className="w-full" disabled={isPending} type="submit">
                {isPending ? 'Signing up...' : 'Sign Up'}
              </Button>
            </div>
          </form>

          <div>
            <p>
              Already have an account?{' '}
              <Link className="underline" href="/login">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
