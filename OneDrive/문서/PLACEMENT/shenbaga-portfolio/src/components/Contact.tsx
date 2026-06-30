import { personal } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-label">07 — Contact</div>

        <div className="max-w-3xl mt-6">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-text leading-tight mb-6">
            Let's build something
            <br />
            <span className="gradient-text">worth learning from.</span>
          </h2>
          <p className="text-muted font-body text-lg leading-relaxed mb-12 max-w-xl">
            I'm actively seeking internship opportunities in ML engineering, data science, and full-stack
            AI development. If you're working on something interesting, let's talk.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-accent text-bg font-display font-semibold hover:bg-accent/90 transition-all glow-accent group"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send an Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 rounded-xl border border-border text-text font-display font-semibold hover:border-accent/40 hover:text-accent transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Email",
                value: personal.email,
                href: `mailto:${personal.email}`,
              },
              {
                label: "Phone",
                value: personal.phone,
                href: `tel:${personal.phone}`,
              },
              {
                label: "GitHub",
                value: "github.com/shenal19",
                href: personal.github,
              },
              {
                label: "Location",
                value: personal.location,
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card"
              >
                <span className="font-mono text-xs text-muted w-16 flex-shrink-0">{item.label}</span>
                <span className="text-border">—</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-text font-body hover:text-accent transition-colors truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-text font-body">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
