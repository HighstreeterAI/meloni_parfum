"use client";

import { useActionState } from "react";
import { contactAction } from "@/app/actions";
import type { FormResult } from "@/services/forms";
import { Button } from "@/components/ui/button";

const initialState: FormResult = { status: "idle", message: "" };

const labelClass = "text-[10px] uppercase tracking-label text-taupe";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(contactAction, initialState);

  if (state.status === "success") {
    return (
      <div role="status" className="border-t border-line pt-10">
        <p className="font-serif text-3xl font-light italic leading-snug text-ink">Vielen Dank.</p>
        <p className="body-copy mt-4 max-w-md">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-10" noValidate>
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required className="field" />
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          E-Mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="field"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Nachricht
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="field resize-none"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <Button type="submit" disabled={isPending} withArrow className="w-full sm:w-auto sm:min-w-64">
          {isPending ? "Wird gesendet" : "Nachricht senden"}
        </Button>
        {state.status === "error" && (
          <p role="alert" className="text-[12px] font-light text-[#9a4a3a]">
            {state.message}
          </p>
        )}
      </div>
    </form>
  );
}
