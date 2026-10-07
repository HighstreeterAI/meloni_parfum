import type { ReactNode } from "react";
import { PlusIcon } from "./icons";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.id} open={item.defaultOpen} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between py-5 text-[11px] uppercase tracking-label text-ink">
            {item.title}
            <PlusIcon
              width={14}
              height={14}
              className="transition-transform duration-500 ease-soft group-open:rotate-45"
            />
          </summary>
          <div className="body-copy pb-6 pr-6">{item.content}</div>
        </details>
      ))}
    </div>
  );
}
