"use client";

import { useActionState, useId } from "react";
import { subscribeAction } from "@/app/actions";
import type { FormResult } from "@/services/forms";
import { cn } from "@/lib/format";

const initialState: FormResult = { status: "idle", message: "" };

export function Newsletter() {
  const [state, formAction, isPending] = useActionState(subscribeAction, initialState);
  const inputId = useId();
  const messageId = useId();

  return (
    <section aria-labelledby="newsletter-heading" className="border-t border-line bg-ivory py-20 lg:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Newsletter</p>
          <h2 id="newsletter-heading" className="heading mt-6 text-3xl sm:text-4xl lg:text-5xl">
            Tauchen Sie ein in die Welt
            <br />
            von Meloni Parfums
          </h2>
          <p className="body-copy mx-auto mt-6 max-w-md">
            Erfahren Sie als Erste von neuen Kreationen, limitierten Editionen und Geschichten aus
            unserem Atelier.
          </p>

          {state.status === "success" ? (
            <p role="status" className="mt-12 font-serif text-xl font-light italic text-ink">
              {state.message}
            </p>
          ) : (
            <form action={formAction} className="mx-auto mt-12 max-w-lg" noValidate>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-0">
                <label htmlFor={inputId} className="sr-only">
                  E-Mail-Adresse
                </label>
                <input
                  id={inputId}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Ihre E-Mail-Adresse"
                  aria-invalid={state.status === "error"}
                  aria-describedby={state.message ? messageId : undefined}
                  className="field text-center sm:text-left"
                />
                <button
                  type="submit"
                  disabled={isPending}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 border-b border-line py-3 text-[11px] uppercase tracking-label text-ink transition-colors duration-300 hover:border-ink disabled:text-taupe sm:pl-6"
                >
                  {isPending ? "Wird angemeldet" : "Abonnieren"}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 ease-soft group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
              <p
                id={messageId}
                role="alert"
                className={cn(
                  "mt-4 min-h-5 text-[12px] font-light text-[#9a4a3a]",
                  state.status !== "error" && "invisible",
                )}
              >
                {state.message}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
