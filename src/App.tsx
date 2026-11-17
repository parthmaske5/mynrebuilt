import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { ProofOfWork } from '@/components/ProofOfWork';
import { About } from '@/components/About';
import { OurCrew } from '@/components/OurCrew';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { OurCrewPage } from '@/pages/OurCrewPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    // Intercept client-side link clicks for seamless SPA navigation
    const handleDocumentClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Handle internal routes
      if (href.endsWith('/our-crew') || href === '/our-crew') {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (href === '/' || href.endsWith('/')) {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (href.includes('/#')) {
        e.preventDefault();
        const hash = href.substring(href.indexOf('/#') + 1);
        window.history.pushState({}, '', href);
        setCurrentPath(href.split('/#')[0] || '/');
        // Allow DOM to update then scroll
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  if (currentPath.endsWith('/our-crew') || currentPath.includes('/our-crew')) {
    return <OurCrewPage />;
  }

  return (
    <div className="min-h-screen bg-cream-50 flex flex-col">
      <Header currentPath="/" />
      <main className="flex-grow">
        <Hero />
        <Capabilities />
        <ProofOfWork />
        <About />
        <OurCrew />
        <ContactSection />
      </main>
      <Footer currentPath="/" />
      <MobileBottomBar />
    </div>
  );
}

export default App;
