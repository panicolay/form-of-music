'use client';

import { useState } from 'react';

import { Button, Field } from '../components/ui';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'username':
        return value.length < 3
          ? 'Username must be at least 3 characters long'
          : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value)
          ? 'Please enter a valid email address'
          : '';
      case 'password':
        return value.length < 8
          ? 'Password must be at least 8 characters long'
          : '';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      username: validateField('username', formData.username),
      email: validateField('email', formData.email),
      password: validateField('password', formData.password),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Ajouter la logique d'inscription ici
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error during signup:', error);
    } finally {
      setIsLoading(false);
    }
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
        noValidate
        className="border border-zinc-200 divide-y divide-zinc-200"
        onSubmit={handleSubmit}
      >
        <Field
          autoFocus
          required
          error={errors.username}
          label="Username"
          name="username"
          value={formData.username}
          onBlur={handleBlur}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <Field
          required
          error={errors.email}
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onBlur={handleBlur}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Field
          required
          error={errors.password}
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onBlur={handleBlur}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <div className="flex">
          <Button disabled={isLoading} href="/">
            Cancel
          </Button>

          <Button
            className="border-l-1 w-full"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </div>
      </form>
    </div>
  );
}
