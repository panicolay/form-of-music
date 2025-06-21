import { validateEmail, validatePassword } from '@/utils/validations';

export function validateLoginForm(email: string, password: string) {
  const emailValidation = validateEmail(email);
  const passwordValidation = validatePassword(password, false);

  return {
    email: emailValidation.error,
    password: passwordValidation.error,
    global: '',
    isValid: emailValidation.isValid && passwordValidation.isValid,
  };
}
