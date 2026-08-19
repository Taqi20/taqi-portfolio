import { type ReactNode } from "react";
import { useLenisSetup } from "@/hooks/useLenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useLenisSetup();
  return <>{children}</>;
}

