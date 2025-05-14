'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

import { Button, Field } from '@/components/ui';

import { signup } from './actions';
import { signupSchema } from './validation';

export default function SignUp() {
  const [errors, setErrors] = useState({ email: '', password: '', global: '' });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

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
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const validationErrors = validate(email, password);
    if (validationErrors.email || validationErrors.password) {
      setErrors(validationErrors);
      return;
    }

    startTransition(async () => {
      const result = await signup(email, password);
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

  // TODO: Regarder ce que sont max-w-md et mx-auto
  // et comment les utiliser (Tailwind CSS)
  return (
    <div
      className="
        space-y-10
        max-w-md mx-auto
    "
    >
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
          instruction="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
          label="Password"
          name="password"
          type="password"
        />

        <div className="flex">
          <Button className="border-r-1" href="/">
            Cancel
          </Button>
          <Button className="w-full" disabled={isPending} type="submit">
            {isPending ? 'Signing up...' : 'Sign Up'}
          </Button>
        </div>
      </form>

      <div>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
