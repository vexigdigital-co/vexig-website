import { useEffect, useState } from 'react';

// Central place to decide how "heavy" the 3D scene is allowed to be.
// Mobile + reduced-motion users get a lighter, near-static version of the scene.
export function useDeviceCapability() {
  const [state, setState] = useState({ isMobile: false, reducedMotion: false });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mq = window.matchMedia('(max-width: 768px)');
    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setState({ isMobile: mq.matches, reducedMotion: rmq.matches });
    update();

    if (mq.addEventListener) {
      mq.addEventListener('change', update);
      rmq.addEventListener('change', update);
    } else {
      mq.addListener(update);
      rmq.addListener(update);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', update);
        rmq.removeEventListener('change', update);
      } else {
        mq.removeListener(update);
        rmq.removeListener(update);
      }
    };
  }, []);

  return state;
}
