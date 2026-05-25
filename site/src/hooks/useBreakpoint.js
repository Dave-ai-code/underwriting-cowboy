import { useState, useEffect } from 'react';

/**
 * Returns { isMobile, isTablet } based on window width.
 * isMobile  < 768px
 * isTablet  768–1099px
 * desktop   >= 1100px
 */
export function useBreakpoint() {
  const [width, setWidth] = useState(
    () => (typeof window !== 'undefined' ? window.innerWidth : 1200)
  );

  useEffect(() => {
    const handle = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handle, { passive: true });
    return () => window.removeEventListener('resize', handle);
  }, []);

  return {
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1100,
    width,
  };
}
