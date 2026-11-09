'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { FeedbackButton } from './FeedbackButton';

const FeedbackDrawer = lazy(() =>
  import('./FeedbackDrawer').then((m) => ({ default: m.FeedbackDrawer }))
);

export const GlobalFeedback: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Global custom event listener if any component wants to trigger feedback drawer
  useEffect(() => {
    const handleOpenGlobalFeedback = () => {
      setIsOpen(true);
    };

    window.addEventListener('open-global-feedback', handleOpenGlobalFeedback);
    return () => {
      window.removeEventListener('open-global-feedback', handleOpenGlobalFeedback);
    };
  }, []);

  if (hasError) {
    return null;
  }

  try {
    return (
      <>
        <FeedbackButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
        {isOpen && (
          <Suspense fallback={null}>
            <FeedbackDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </Suspense>
        )}
      </>
    );
  } catch (err) {
    console.error("GlobalFeedback render error caught:", err);
    setHasError(true);
    return null;
  }
};
