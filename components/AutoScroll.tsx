'use client';

import { useEffect, useRef } from 'react';

export default function AutoScroll() {
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      // Clear any existing interval
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }

      // Start slow auto-scrolling (1 pixel every 50ms = ~20px/second)
      scrollIntervalRef.current = setInterval(() => {
        if (!isUserInteractingRef.current) {
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const currentScroll = window.scrollY;

          if (currentScroll < maxScroll) {
            window.scrollBy({
              top: 1,
              behavior: 'auto' // Use 'auto' for smoother incremental scrolling
            });
          } else {
            // Reached bottom, scroll back to top slowly
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }
        }
      }, 50); // 50ms interval for smooth, slow scrolling
    };

    const pauseAutoScroll = () => {
      isUserInteractingRef.current = true;

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Resume after 3 seconds of no interaction
      timeoutRef.current = setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 3000);
    };

    // User interaction events
    const handleInteraction = () => {
      pauseAutoScroll();
    };

    // Add event listeners for various user interactions
    window.addEventListener('wheel', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('touchmove', handleInteraction, { passive: true });
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    // Start auto-scroll after initial delay
    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 2000); // Wait 2 seconds before starting

    // Cleanup
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(initialDelay);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('touchmove', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  return null; // This component doesn't render anything
}
