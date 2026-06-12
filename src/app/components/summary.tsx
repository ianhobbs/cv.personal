import { Section } from "../../components/ui/section";

interface AboutProps {
  summary: string[];
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        About
      </h2>
      <div className="space-y-3 font-mono text-sm text-foreground/80 print:text-[12px]">
        {summary.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
