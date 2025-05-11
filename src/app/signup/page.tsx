'use client';

import { useState } from 'react';

import { Button, Field } from '../components/ui';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter la logique d'inscription ici
    console.log('Form submitted:', formData);
  };

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
            font-poppins font-medium
            text-4xl uppercase
        "
      >
        Create <br />
        an account
      </h2>

      <form
        className="border border-zinc-200 divide-y divide-zinc-200"
        onSubmit={handleSubmit}
      >
        <Field
          autoFocus
          required
          label="Username"
          name="username"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <Field
          required
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Field
          required
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div className="flex">
          <Button href="/">Cancel</Button>

          <Button className="border-l-1 w-full" type="submit">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
