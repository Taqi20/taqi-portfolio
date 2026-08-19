"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks } from "@/constants/nav";
import { profile } from "@/data/profile";
import { scrollToId } from "@/hooks/useLenis";
import { cn } from "@/lib/cn";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    if (!isHome) return;
    e.preventDefault();
    scrollToId(href.slice(1));
  };

  const resolveHref = (href: string) =>
    href.startsWith("#") ? (isHome ? href : `/${href}`) : href;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-[env(safe-area-inset-top)] z-40 transition-all duration-500",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            "flex items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500",
            scrolled
              ? "border-[color:var(--color-hairline)] bg-[color:var(--color-bg)]/35 backdrop-blur-sm shadow-[var(--shadow-soft)]"
              : "border-transparent bg-transparent backdrop-blur-xl"
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-mono uppercase tracking-[0.18em]"
            aria-label={`${profile.name} — home`}
          >
            <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--color-emerald)] animate-pulse-dot" />
            <span>{profile.wordmark}</span>
            <span className="text-[color:var(--color-ink-mute)]">/</span>
            <span className="text-[color:var(--color-ink-soft)]">{profile.role}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const href = resolveHref(link.href);
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={handleAnchor(link.href)}
                  className="rounded-full px-3 py-1.5 text-[13px] text-[color:var(--color-ink-soft)] transition-[transform,background,color] hover:-translate-y-0.5 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-emerald)]"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              size="sm"
              variant="primary"
              asChild
              className="hidden lg:inline-flex"
            >
              <Link href="/resume">Resume</Link>
            </Button>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-hairline)] bg-[color:var(--color-bg-elevated)]/60 text-[color:var(--color-ink-soft)] backdrop-blur lg:hidden"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-soft)]">
                  Menu
                </SheetTitle>
                <nav className="flex flex-col gap-1" aria-label="Mobile">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={resolveHref(link.href)}
                        onClick={(e) => {
                          handleAnchor(link.href)(e);
                          setMenuOpen(false);
                        }}
                        className="rounded-lg px-3 py-3 font-serif text-2xl text-[color:var(--color-ink)] transition-[transform,background,color] hover:-translate-y-0.5 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-emerald)]"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="/resume"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-lg px-3 py-3 font-serif text-2xl text-[color:var(--color-ink)] transition-[transform,background,color] hover:-translate-y-0.5 hover:bg-[color:var(--color-surface)] hover:text-[color:var(--color-emerald)]"
                    >
                      Resume
                    </Link>
                  </SheetClose>
                </nav>
                <div className="mt-10 space-y-3 text-[11px] font-mono uppercase tracking-[0.16em] text-[color:var(--color-ink-mute)]">
                  <div>{profile.email}</div>
                  <div>{profile.location}</div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
