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

  const validateForm = () => {
    const newErrors = {
      username: '',
      email: '',
      password: '',
    };

    // Username validation
    if (formData.username.length < 2) {
      newErrors.username = 'Username must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    const hasMinLength = formData.password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(formData.password);
    const hasLowerCase = /[a-z]/.test(formData.password);
    const hasNumber = /[0-9]/.test(formData.password);
    const hasSpecialChar =
      /[!@#$%^&*(),.?":{}|<>[\]\\/;'`~\-_=+éèêëàâäôöûüùç]/.test(
        formData.password
      );

    if (
      !hasMinLength ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      newErrors.password =
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character';
    }

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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <Field
          required
          error={errors.password}
          instruction="Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
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
