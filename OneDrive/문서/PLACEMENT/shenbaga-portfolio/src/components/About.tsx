import { personal, education, certifications } from "@/lib/data";

export default function About() {
  const certColors: Record<string, string> = {
    accent: "text-accent border-accent/20 bg-accent/5",
    "accent-2": "text-blue-400 border-blue-400/20 bg-blue-400/5",
    highlight: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5",
  };

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">02 — About</div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text mt-2 mb-8 leading-tight">
              Building at the edge of
              <br />
              <span className="gradient-text">data &amp; intelligence.</span>
            </h2>

            <div className="space-y-4">
              {personal.bio.map((para, i) => (
                <p key={i} className="text-muted leading-relaxed font-body">
                  {para}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded border border-border text-muted text-sm font-body hover:border-accent/40 hover:text-accent transition-all group"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {personal.email}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded border border-border text-muted text-sm font-body hover:border-accent/40 hover:text-accent transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded border border-border text-muted text-sm font-body hover:border-accent/40 hover:text-accent transition-all"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4aa" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-xs text-muted mb-1 tracking-widest uppercase">Education</div>
                  <div className="font-display font-semibold text-text">{education.degree}</div>
                  <div className="text-sm text-muted mt-1">{education.school}</div>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="tag">{education.period}</span>
                    <span className="tag tag-yellow">CGPA: {education.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">Certifications</div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:border-border/80 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 ${
                        certColors[cert.color] || certColors.accent
                      }`}
                    >
                      {cert.badge}
                    </div>
                    <div>
                      <div className="text-sm text-text font-body">{cert.title}</div>
                      <div className="text-xs text-muted font-mono mt-0.5">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
