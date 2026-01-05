import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tochukwu - React & Next.js Developer",
  description:
    "Passionate React developer specializing in building scalable web applications with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "React Developer",
    "Next.js",
    "TypeScript",
    "tailwindCss",
    "Solidity",
    "Wagmi",
    "Web Developer",
  ],
  authors: [{ name: "Tochukwu" }],
  openGraph: {
    title: "Tochukwu - React & Next.js Developer",
    description:
      "Portfolio showcasing modern web applications built with React, Next.js, and TypeScript",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
