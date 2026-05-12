import { projects, openSource } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Full-Stack + AI": "tag",
  "ML Research": "tag tag-yellow",
  "NLP": "tag",
  "Computer Vision": "tag tag-blue",
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative bg-surface">
      {/* Horizontal rule decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="section-label">02 — Work</div>
        <div className="flex items-end justify-between mb-12 mt-2">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
            Featured
            <br />
            <span className="gradient-text">Projects</span>
          </h2>
          <a
            href="https://github.com/shenal19"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-sm text-muted font-body hover:text-accent transition-colors"
          >
            All repos
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>

        {/* Featured 3-project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} highlight={i === 0} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {rest.map((project, i) => (
              <SmallProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Open Source */}
        <div className="mt-20">
          <div className="section-label mb-2">Open Source</div>
          <h3 className="font-display font-bold text-2xl text-text mb-8">Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {openSource.map((os, i) => (
              <a
                key={i}
                href={os.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-border bg-card card-hover group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-mono text-xs text-muted">{os.org}/</span>
                    <span className="font-display font-semibold text-text">{os.repo}</span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6b7f96"
                    strokeWidth="2"
                    className="group-hover:stroke-accent transition-colors flex-shrink-0"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <p className="text-sm text-muted leading-relaxed font-body mb-4">{os.description}</p>
                <div className="flex flex-wrap gap-2">
                  {os.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  highlight,
}: {
  project: (typeof projects)[0];
  index: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-6 rounded-xl border bg-card flex flex-col card-hover ${
        highlight ? "border-accent/30" : "border-border"
      }`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-3">
        <div className={`text-xs font-mono ${categoryColors[project.category] || "tag"}`}>
          {project.category}
        </div>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-text mb-1">{project.title}</h3>
      <p className="font-mono text-sm text-accent mb-3">{project.tagline}</p>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed font-body flex-1 mb-4">
        {project.description}
      </p>

      {/* Metrics */}
      <div className="space-y-1 mb-5">
        {project.metrics.map((m, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-mono text-text/70">
            <span className="text-accent">▸</span>
            {m}
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-xs font-mono text-muted hover:text-accent transition-colors group"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
        View on GitHub
      </a>

      {highlight && (
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      )}
    </div>
  );
}

function SmallProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="p-5 rounded-xl border border-border bg-card card-hover group flex flex-col"
    >
      <div className="flex items-center justify-between mb-2">
        <span className={categoryColors[project.category] || "tag"}>{project.category}</span>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>
      <h3 className="font-display font-semibold text-text mb-1 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-muted font-body line-clamp-2 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="tag">{s}</span>
        ))}
      </div>
    </a>
  );
}
