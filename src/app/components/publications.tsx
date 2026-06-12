import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Publication = (typeof RESUME_DATA)["publications"][number];

interface PublicationsListProps {
  publications: readonly Publication[];
}

export function Publications({ publications }: PublicationsListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="publications-section">
        Publications
      </h2>
      <ul aria-labelledby="publications-section" className="space-y-2">
        {publications.map((item) => (
          <li
            key={`${item.publisher}-${item.title}-${item.year}`}
            className="flex items-baseline justify-between gap-x-4 text-sm"
          >
            <div>
              <span className="font-medium text-foreground">{item.title}</span>
              <span className="text-foreground/60">, {item.publisher}</span>
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
