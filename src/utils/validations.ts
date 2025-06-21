import { z } from 'zod';

// ===== SCHEMAS =====

export const emailSchema = z
  .string()
  .email({ message: 'Invalid email address' });

export const passwordLightSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters long' });

const passwordStrongMessage = `
    <p>Password must contain at least:</p>
    <ul class="list-disc pl-6">
      <li>8 characters</li>
      <li>1 uppercase</li>
      <li>1 lowercase</li>
      <li>1 number</li>
    </ul>`;

export const passwordStrongSchema = z
  .string()
  .min(8, { message: passwordStrongMessage })
  .refine(
    (val) => /[A-Z]/.test(val) && /[a-z]/.test(val) && /[0-9]/.test(val),
    { message: passwordStrongMessage }
  );

// ===== HELPERS =====
function getValidationError(
  result: z.SafeParseReturnType<unknown, unknown>
): string {
  if (result.success) return '';
  return result.error.errors[0]?.message || 'Invalid input';
}

export function validateEmail(email: string) {
  const result = emailSchema.safeParse(email);
  return {
    isValid: result.success,
    error: getValidationError(result),
  };
}

export function validatePassword(password: string, strong = false) {
  const schema = strong ? passwordStrongSchema : passwordLightSchema;
  const result = schema.safeParse(password);
  return {
    isValid: result.success,
    error: getValidationError(result),
  };
}

// TODO: add validation to settings page
