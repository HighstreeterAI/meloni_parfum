/**
 * Form submission layer (newsletter, contact).
 * Mocked today; replace with calls to an email/CRM provider later.
 */

export interface FormResult {
  status: "idle" | "success" | "error";
  message: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INVALID_EMAIL = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

export async function subscribeToNewsletter(email: string): Promise<FormResult> {
  if (!isValidEmail(email)) {
    return { status: "error", message: INVALID_EMAIL };
  }

  return { status: "success", message: "Vielen Dank. Willkommen in der Welt von Meloni Parfums." };
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function sendContactMessage(input: ContactMessage): Promise<FormResult> {
  if (!input.name.trim() || !input.message.trim()) {
    return { status: "error", message: "Bitte füllen Sie alle Felder aus." };
  }

  if (!isValidEmail(input.email)) {
    return { status: "error", message: INVALID_EMAIL };
  }

  return {
    status: "success",
    message: "Vielen Dank für Ihre Nachricht. Wir antworten Ihnen innerhalb von zwei Werktagen.",
  };
}
