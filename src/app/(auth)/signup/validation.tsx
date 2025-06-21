import { validateEmail, validatePassword } from '@/utils/validations';

export function validateSignupForm(email: string, password: string) {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password, true);

  return {
    email: emailValidation.error,
    password: passwordValidation.error,
    global: '',
    isValid: emailValidation.isValid && passwordValidation.isValid,
  };
}
