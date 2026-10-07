import type { FragranceNotes as Notes } from "@/types/product";

const tiers = [
  { key: "top", label: "Kopfnote" },
  { key: "heart", label: "Herznote" },
  { key: "base", label: "Basisnote" },
] as const;

export function FragranceNotes({ notes }: { notes: Notes }) {
  return (
    <div>
      <h2 className="eyebrow text-ink">Duftnoten</h2>
      <dl className="mt-6 grid grid-cols-3 border-y border-line">
        {tiers.map((tier) => (
          <div key={tier.key} className="min-w-0 border-l border-line py-5 pl-3 first:border-l-0 first:pl-0 sm:py-6 sm:pl-6">
            <dt className="text-[9px] uppercase tracking-[0.18em] text-taupe sm:text-[10px] sm:tracking-label">
              {tier.label}
            </dt>
            {notes[tier.key].map((note) => (
              <dd key={note} className="mt-2 hyphens-auto break-words font-serif text-base leading-snug text-ink sm:text-lg">
                {note}
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
  );
}
