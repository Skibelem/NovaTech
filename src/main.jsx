import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatePresence } from 'framer-motion';
import App from './App.jsx';
import Preloader from './components/ui/Preloader.jsx';
import './index.css';

function Root() {
  const [showApp, setShowApp] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    const onReady = () => {
      // Keep the transition smooth, but enforce a minimum visible time
      // so the loader doesn't "flash" on fast machines.
      const MIN_PRELOADER_MS = 1200;

      const start = performance.now();
      requestAnimationFrame(() => {
        setShowApp(true);

        const elapsed = performance.now() - start;
        const remaining = Math.max(0, MIN_PRELOADER_MS - elapsed);

        setTimeout(() => setPreloaderVisible(false), remaining);
      });
    };

    if (document.readyState === 'complete') {
      onReady();
      return;
    }

    window.addEventListener('load', onReady, { once: true });
    return () => window.removeEventListener('load', onReady);
  }, []);

  return (
    <>
      <AnimatePresence>
        {preloaderVisible && (
          <Preloader key="preloader" isVisible={preloaderVisible} />
        )}
      </AnimatePresence>
      {showApp && <App />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
