'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { TopBarProcess } from '@/components/layout';
import { Button, Field } from '@/components/ui';

import { login } from './actions';
import { loginSchema } from './validation';

export default function LoginPage() {
  const [errors, setErrors] = useState({ email: '', password: '', global: '' });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function validate(email: string, password: string) {
    const result = loginSchema.safeParse({ email, password });
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
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const validationErrors = validate(email, password);
    if (validationErrors.email || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    startTransition(async () => {
      const result = await login(email, password);
      if (
        result?.errors &&
        (result.errors.email || result.errors.password || result.errors.global)
      ) {
        setErrors(result.errors);
      } else {
        router.push('/');
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
            Login
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
            className="border border-zinc-200 divide-y divide-zinc-200"
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
              label="Password"
              name="password"
              type="password"
            />

            <div className="flex">
              <Button className="border-r-1" href="/">
                Cancel
              </Button>
              <Button className="w-full" disabled={isPending} type="submit">
                {isPending ? 'Logging in...' : 'Log in'}
              </Button>
            </div>
          </form>

          <div>
            <p>
              Don&apos;t have an account yet?{' '}
              <Link className="underline" href="/signup">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
