import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import HeatingPage from './pages/HeatingPage';
import CoolingPage from './pages/CoolingPage';
import IndoorAirQualityPage from './pages/IndoorAirQualityPage';
import ComfortControlsPage from './pages/ComfortControlsPage';
import FinancingPage from './pages/FinancingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-red-700 focus:rounded-lg focus:shadow-lg focus:font-bold">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heating" element={<HeatingPage />} />
          <Route path="/cooling" element={<CoolingPage />} />
          <Route path="/indoor-air-quality" element={<IndoorAirQualityPage />} />
          <Route path="/comfort-controls" element={<ComfortControlsPage />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
