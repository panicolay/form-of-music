import { Button, Field } from '@/components/ui';

import { login, signup } from './actions';

export default function LoginPage() {
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
      <form className="border border-zinc-200 divide-y divide-zinc-200">
        <Field autoFocus required label="Email" name="email" type="email" />
        <Field required label="Password" name="password" type="password" />

        <div className="flex">
          <Button href="/">Cancel</Button>
          <Button formAction={login}>Log in</Button>
          <Button formAction={signup}>Sign up</Button>
        </div>
      </form>
    </div>
  );
}

// TODO: comprendre la différence entre la structure
// de la page Signup et Login.
// Est-ce que la logique est diviésé entre la page et l'action
// vs la page Signup ?
