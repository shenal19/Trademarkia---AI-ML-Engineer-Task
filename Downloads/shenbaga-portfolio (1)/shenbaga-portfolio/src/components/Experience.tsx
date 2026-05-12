import { experience } from "@/lib/data";

const typeStyles: Record<string, string> = {
  internship: "tag",
  extracurricular: "tag tag-blue",
};

const typeLabel: Record<string, string> = {
  internship: "Internship",
  extracurricular: "Extracurricular",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">03 — Background</div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2 mb-16 leading-tight">
          Experience &amp;
          <br />
          <span className="gradient-text">Track Record</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative flex gap-8 md:ml-12">
                {/* Timeline dot */}
                <div className="absolute -left-[2.6rem] top-5 w-3 h-3 rounded-full bg-bg border-2 border-accent hidden md:block" />

                <div className="flex-1 p-6 rounded-xl border border-border bg-card card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-text">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-accent font-mono text-sm">{exp.company}</span>
                        <span className="text-border">·</span>
                        <span className="text-muted text-sm font-body">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={typeStyles[exp.type] || "tag"}>{typeLabel[exp.type] || exp.type}</span>
                      <span className="font-mono text-xs text-muted bg-surface px-2 py-1 rounded border border-border">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted font-body leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
