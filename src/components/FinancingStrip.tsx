// FinancingStrip — shown on every page just below the fixed navbar
// Position: fixed, top-20 (80px = navbar height), z-40
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinancingStrip() {
  return (
    <div
      className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-2.5 text-white text-sm font-semibold"
      style={{ backgroundColor: '#003DA5' }}
      role="banner"
      aria-label="Financing announcement"
    >
      <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      <span>
        Financing Available Through{' '}
        <Link
          to="/financing"
          className="underline underline-offset-2 decoration-white/60 hover:decoration-white transition-colors"
        >
          Synchrony Financial
        </Link>
        {' '}— Ask Us Today!
      </span>
    </div>
  );
}
