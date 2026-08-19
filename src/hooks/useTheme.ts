import { useEffect, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

const THEME_CHANGE_EVENT = "portfolio-theme-change";

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  window.localStorage.setItem("theme", theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function subscribeToTheme(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => undefined;

  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => "light"
  );

  useEffect(() => {
    applyTheme(readTheme());
  }, []);

  const setTheme = (nextTheme: Theme) => applyTheme(nextTheme);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggle };
}
