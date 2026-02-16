import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/') {
      // Instant scroll to top on the home page (fast, no animation)
      window.scrollTo(0, 0);
    } else {
      // Smooth scroll on all other pages for better UX
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;