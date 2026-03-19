import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SiteConfigProvider } from './config/SiteConfigContext.tsx';
import { config } from './config/neas.config.ts';

// ─── To clone for a new client ───────────────────────────────
// 1. Duplicate neas.config.ts → e.g. evolution.config.ts
// 2. Fill in all fields
// 3. Change the import above to your new config file
// That's it. No component code changes needed.
// ─────────────────────────────────────────────────────────────

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteConfigProvider config={config}>
      <App />
    </SiteConfigProvider>
  </StrictMode>,
);
