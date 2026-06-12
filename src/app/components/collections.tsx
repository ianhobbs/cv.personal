import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Collection = (typeof RESUME_DATA)["collections"][number];

interface CollectionsListProps {
  collections: readonly Collection[];
}

export function Collections({ collections }: CollectionsListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="collections-section">
        Collections
      </h2>
      <ul aria-labelledby="collections-section" className="space-y-2">
        {collections.map((item) => (
          <li
            key={`${item.institution}-${item.item}-${item.year}`}
            className="flex items-baseline justify-between gap-x-4 text-sm"
          >
            <div>
              <span className="font-medium text-foreground">{item.item}</span>
              <span className="text-foreground/60">, {item.institution}</span>
            </div>
            <span className="shrink-0 tabular-nums text-gray-500">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
