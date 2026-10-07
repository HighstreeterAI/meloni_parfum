"use server";

import {
  sendContactMessage,
  subscribeToNewsletter,
  type FormResult,
} from "@/services/forms";

export async function subscribeAction(_prev: FormResult, formData: FormData): Promise<FormResult> {
  return subscribeToNewsletter(String(formData.get("email") ?? ""));
}

export async function contactAction(_prev: FormResult, formData: FormData): Promise<FormResult> {
  return sendContactMessage({
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  });
}
