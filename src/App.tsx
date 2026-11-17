import { useState, useEffect } from 'react';
import { RepairHome } from '@/pages/RepairHome';
import { OurCrewPage } from '@/pages/OurCrewPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element).closest('a');
      if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !['/', '/our-crew'].includes(url.pathname)) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      event.preventDefault();
      window.history.pushState({}, '', url.pathname + url.hash);
      setCurrentPath(url.pathname);
      if (url.hash) {
        requestAnimationFrame(() => requestAnimationFrame(() => document.getElementById(decodeURIComponent(url.hash.slice(1)))?.scrollIntoView()));
      } else window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('click', onClick);
    };
  }, []);
  return currentPath === '/our-crew' ? <OurCrewPage /> : <RepairHome />;
}
export default App;
