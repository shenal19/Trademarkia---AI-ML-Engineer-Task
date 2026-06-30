# shenbaga-portfolio

Personal portfolio website for **Shenbaga Balaji** — AI/ML Engineer & Data Science student at VIT Chennai, AWS Certified Solutions Architect.

Built with Next.js 14 (App Router), Tailwind CSS, and TypeScript. Dark-mode, fully responsive, with subtle animations and a terminal-meets-editorial aesthetic.

---

## ✦ Sections

- **Hero** — Typewriter role animation, stats, strong CTA
- **About** — Bio, education, certifications
- **Projects** — Netflix Analytics Platform, Bug Prediction System, Cricket Ball Tracker, AgreeWise + open source/hackathon contributions
- **Experience** — Work history with timeline (Skillumni, ISNIA Technologies, Music Club)
- **Skills** — Categorized skill grid
- **Achievements** — Hackathons, LeetCode rating, sports recognition
- **Contact** — Email, LinkedIn, GitHub

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
git clone https://github.com/<your-username>/shenbaga-portfolio.git
cd shenbaga-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page composition
├── components/
│   ├── Navbar.tsx         # Sticky navbar with scroll detection
│   ├── Hero.tsx            # Hero with typewriter effect
│   ├── About.tsx           # Bio, education, certifications
│   ├── Projects.tsx        # Featured projects + open source
│   ├── Experience.tsx      # Timeline experience section
│   ├── Skills.tsx          # Skill category grid
│   ├── Achievements.tsx    # Hackathons, LeetCode, sports
│   ├── Contact.tsx         # Contact CTA + info
│   └── Footer.tsx          # Footer with social links
└── lib/
    └── data.ts           # All portfolio content (single source of truth)
```

---

## ✏️ Customization

All content lives in `src/lib/data.ts`. Update the exported constants to change:
- Personal info, bio, links
- Projects and metrics
- Experience entries
- Skills, certifications, achievements

No environment variables required.

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [TypeScript](https://www.typescriptlang.org/)
- [Google Fonts](https://fonts.google.com/) — Syne, DM Sans, JetBrains Mono
