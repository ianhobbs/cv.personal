import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];

interface AwardsListProps {
  awards: readonly Award[];
}

export function Awards({ awards }: AwardsListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        Awards
      </h2>
      <ul className="space-y-2" aria-labelledby="awards-section">
        {awards.map((item) => (
          <li
            key={`${item.award}-${item.year}`}
            className="flex items-baseline justify-between gap-x-4 text-sm"
          >
            <span className="text-foreground/80">{item.award}</span>
            <span className="shrink-0 tabular-nums text-gray-500">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
