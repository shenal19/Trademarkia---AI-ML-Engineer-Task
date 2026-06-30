import { achievements } from "@/lib/data";

const icons: Record<string, JSX.Element> = {
  trophy: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" />
      <path d="M7 5H4a2 2 0 002 2 2 2 0 002-2zM17 5h3a2 2 0 01-2 2 2 2 0 01-1-2z" />
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  award: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M8.7 13.5L7 22l5-3 5 3-1.7-8.5" />
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section className="py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">06 — Recognition</div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2 mb-12 leading-tight">
          Achievements &amp;
          <br />
          <span className="gradient-text">Highlights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card card-hover"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                {icons[a.icon]}
              </div>
              <div>
                <h3 className="font-display font-semibold text-text mb-1">{a.title}</h3>
                <p className="text-sm text-muted font-body leading-relaxed">{a.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
