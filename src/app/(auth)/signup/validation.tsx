import { z } from 'zod';

import { emailSchema, passwordStrongSchema } from '@/utils/validations';

export const signupSchema = z.object({
  email: emailSchema,
  password: passwordStrongSchema,
});
