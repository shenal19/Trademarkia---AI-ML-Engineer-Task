import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shenbaga Balaji — AI/ML Engineer",
  description:
    "Pre-final year Data Science engineer building production-grade ML systems, computer vision pipelines, and full-stack analytics platforms. AWS Certified. Open to internships and collaborations.",
  keywords: ["AI", "ML", "Data Science", "Portfolio", "Shenbaga Balaji", "Computer Vision", "Machine Learning"],
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
