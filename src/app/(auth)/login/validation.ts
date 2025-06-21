import { z } from 'zod';

import { emailSchema, passwordLightSchema } from '@/utils/validations';

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordLightSchema,
});
