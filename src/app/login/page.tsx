'use client';

import { useActionState } from 'react';

import { Button, Field } from '@/components/ui';

import { login } from './actions';

export default function LoginPage() {
  const [state, action, isPending] = useActionState(login, { error: '' });

  return (
    <div
      className="
      space-y-10
      max-w-md mx-auto
    "
    >
      <h2
        className="
        font-poppins uppercase
        text-4xl font-semibold
        "
      >
        Login
      </h2>
      {state.error && (
        <div
          className="p-4
          border border-rose-500
          text-rose-500 text-sm
        "
        >
          {state.error}
        </div>
      )}
      <form
        noValidate
        action={action}
        className="border border-zinc-200 divide-y divide-zinc-200"
      >
        <Field autoFocus required label="Email" name="email" type="email" />
        <Field required label="Password" name="password" type="password" />

        <div className="flex">
          <Button className="border-r-1" href="/">
            Cancel
          </Button>
          <Button className="w-full" type="submit">
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
}

// TODO: comprendre la différence entre la structure
// de la page Signup et Login.
// Est-ce que la logique est diviésé entre la page et l'action
// vs la page Signup ?
