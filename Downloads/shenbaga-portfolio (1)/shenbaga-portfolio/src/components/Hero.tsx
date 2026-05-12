"use client";
import { useEffect, useState } from "react";
import { personal, stats } from "@/lib/data";

const roles = [
  "AI / ML Engineer",
  "NLP Systems Builder",
  "Full-Stack Developer",
  "Data Science Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-2/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-2/5 blur-[80px]" />
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-6 text-border font-mono text-xs select-none hidden lg:block">
        <div>01 — PORTFOLIO</div>
        <div className="mt-1 text-muted/40">2026 · VIT CHENNAI</div>
      </div>
      <div className="absolute bottom-12 right-6 text-border font-mono text-xs select-none hidden lg:block text-right">
        <div>AI / ML ENGINEER</div>
        <div className="mt-1 text-muted/40">OPEN TO WORK</div>
      </div>

      {/* Vertical line decoration */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-16">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 opacity-0-init animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            Available for Internships · 2026
          </span>
        </div>

        {/* Name */}
        <h1 className="font-display font-extrabold leading-none mb-4">
          <span className="block text-5xl md:text-7xl lg:text-8xl text-text opacity-0-init animate-fade-up">
            {personal.name.split(" ")[0]}
          </span>
          <span className="block text-5xl md:text-7xl lg:text-8xl gradient-text opacity-0-init animate-fade-up animate-delay-1">
            {personal.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="flex items-center gap-3 mt-6 mb-8 opacity-0-init animate-fade-up animate-delay-2">
          <span className="font-mono text-muted text-sm">~/role</span>
          <span className="text-border">›</span>
          <span className="font-mono text-accent text-lg md:text-xl font-medium">
            {displayed}
            <span className="animate-blink">|</span>
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed opacity-0-init animate-fade-up animate-delay-3 font-body">
          {personal.subtagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-10 opacity-0-init animate-fade-up animate-delay-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded bg-accent text-bg font-display font-semibold text-sm hover:bg-accent/90 transition-all duration-200 glow-accent"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded border border-border text-muted font-body text-sm hover:border-accent/40 hover:text-text transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded border border-border text-muted font-body text-sm hover:border-accent/40 hover:text-text transition-all duration-200 flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 opacity-0-init animate-fade-up animate-delay-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="p-4 rounded border border-border bg-card/50 text-center group hover:border-accent/30 transition-colors"
            >
              <div className="font-display font-bold text-3xl text-accent group-hover:glow-text transition-all">
                {s.value}
              </div>
              <div className="font-mono text-xs text-muted mt-1 tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted opacity-0-init animate-fade-in animate-delay-6">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
