import type { Metadata } from "next";
import Script from "next/script";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import "../styles/globals.css";
import { PortfolioShell } from "@/components/layout/PortfolioShell";

const themeScript = `(() => {
  try {
    const storedTheme = localStorage.getItem("theme");
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
})();`;

export const metadata: Metadata = {
  title: "Mohammad Taqi Khan · Software Engineer",
  description: "Software engineer building Node.js systems, data pipelines, serverless workflows, and full stack products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>
      <body>
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
