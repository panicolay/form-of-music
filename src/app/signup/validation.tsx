import { z } from 'zod';

export const signupSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, {
    message: `
      <p>Password must contain at least:</p>
      <ul class="list-disc pl-6">
        <li>8 characters</li>
        <li>1 uppercase</li>
        <li>1 lowercase</li>
        <li>1 number</li>
      </ul>`,
  }),
});

export type SignupSchema = z.infer<typeof signupSchema>;
