import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Exhibition = (typeof RESUME_DATA)["exhibitions"][number];

interface ExhibitionsListProps {
  exhibitions: readonly Exhibition[];
}

export function Exhibitions({ exhibitions }: ExhibitionsListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="exhibitions-section">
        Exhibitions
      </h2>
      <div role="list" aria-labelledby="exhibitions-section" className="space-y-2">
        {exhibitions.map((item) => (
          <div
            key={`${item.title}-${item.year}`}
            role="listitem"
            className="flex items-baseline justify-between gap-x-4 text-sm"
          >
            <div>
              <span className="font-medium text-foreground">{item.title}</span>
              <span className="text-foreground/60">, {item.venue}</span>
            </div>
            <span className="shrink-0 tabular-nums text-gray-500">{item.year}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
