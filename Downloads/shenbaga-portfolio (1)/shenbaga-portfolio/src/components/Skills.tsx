import { skills } from "@/lib/data";

const categoryIcons: Record<string, string> = {
  "Machine Learning & AI": "🧠",
  "Languages": "⌨️",
  "Data & Backend": "🗄️",
  "Tools & Platforms": "🔧",
  "CS Foundations": "📐",
};

const categoryColors: Record<string, string> = {
  "Machine Learning & AI": "border-accent/30 bg-accent/5",
  "Languages": "border-blue-500/30 bg-blue-500/5",
  "Data & Backend": "border-purple-500/30 bg-purple-500/5",
  "Tools & Platforms": "border-yellow-500/30 bg-yellow-500/5",
  "CS Foundations": "border-pink-500/30 bg-pink-500/5",
};

const headerColors: Record<string, string> = {
  "Machine Learning & AI": "text-accent",
  "Languages": "text-blue-400",
  "Data & Backend": "text-purple-400",
  "Tools & Platforms": "text-yellow-400",
  "CS Foundations": "text-pink-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">04 — Expertise</div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2 mb-12 leading-tight">
          Technical
          <br />
          <span className="gradient-text">Skill Stack</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`p-6 rounded-xl border ${categoryColors[category] || "border-border bg-card"} card-hover`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{categoryIcons[category] || "▪"}</span>
                <h3 className={`font-display font-semibold text-base ${headerColors[category] || "text-text"}`}>
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded text-xs font-mono text-text/80 bg-bg/60 border border-white/5 hover:border-white/15 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Languages strip */}
          <div className="p-6 rounded-xl border border-border bg-card lg:col-span-1 md:col-span-2 lg:col-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌐</span>
              <h3 className="font-display font-semibold text-base text-text/80">Languages Spoken</h3>
            </div>
            <div className="space-y-3">
              {[
                { lang: "Tamil", level: "Native", pct: 100 },
                { lang: "English", level: "Bilingual", pct: 95 },
                { lang: "German", level: "Elementary", pct: 20 },
                { lang: "Spanish", level: "Elementary", pct: 15 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-text/70">{l.lang}</span>
                    <span className="text-muted">{l.level}</span>
                  </div>
                  <div className="h-1 bg-bg/60 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-accent-2 rounded-full transition-all"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
