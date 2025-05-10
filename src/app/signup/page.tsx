'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Field } from '../components/ui';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter la logique d'inscription ici
    console.log('Form submitted:', formData);
  };

  // TODO: Regarder ce que sont max-w-md et mx-auto et comment les utiliser (Tailwind CSS)
  return (
    <div className="
        space-y-10
        max-w-md mx-auto
    ">
        <h2 className="
            font-poppins font-medium
            text-4xl uppercase
        ">
            Create <br />an account
        </h2>
        
        <form onSubmit={handleSubmit}
            className="border border-zinc-500 divide-y divide-zinc-500"
        >

          <Field
            name="username"
            label="Username"
            value={formData.username}
            required
            onChange={(e) => setFormData({...formData, username: e.target.value})}
          />

          <Field
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />

          <Field
            name="password"
            label="Password"
            type="password"
            value={formData.password}
            required
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />

          <div>
            <Link href="/">
              Cancel
            </Link>
            <button
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        
    </div>
  );
} 