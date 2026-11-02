const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Email address for a passwordless code. Phone numbers are not accepted. */
export function normalizeEmail(value: string): string | null {
  const email = value.trim().toLowerCase();
  if (!email || email.length > 320 || !EMAIL.test(email)) return null;
  return email;
}

/** Six-digit code from the sign-in email. */
export function normalizeEmailCode(value: string): string | null {
  const code = value.trim();
  return /^\d{6}$/.test(code) ? code : null;
}
