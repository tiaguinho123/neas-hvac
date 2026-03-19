import { createContext, useContext, type ReactNode } from 'react';
import type { SiteConfig } from './SiteConfig.types';

// ─── Context ────────────────────────────────────────────────
const SiteConfigContext = createContext<SiteConfig | null>(null);

// ─── Hook ───────────────────────────────────────────────────
export function useSiteConfig(): SiteConfig {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) {
    throw new Error('useSiteConfig must be used inside <SiteConfigProvider>');
  }
  return ctx;
}

// ─── Provider ───────────────────────────────────────────────
interface SiteConfigProviderProps {
  config: SiteConfig;
  children: ReactNode;
}

export function SiteConfigProvider({ config, children }: SiteConfigProviderProps) {
  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}
