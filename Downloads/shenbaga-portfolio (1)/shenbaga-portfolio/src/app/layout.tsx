import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shenbaga Balaji — AI/ML Engineer",
  description:
    "Pre-final year Data Science engineer building production-grade ML systems, NLP pipelines, and full-stack AI applications. Open to internships and collaborations.",
  keywords: ["AI", "ML", "Data Science", "Portfolio", "Shenbaga Balaji", "NLP", "Machine Learning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
