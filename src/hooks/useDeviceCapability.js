import { useEffect, useState } from 'react';

// Central place to decide how "heavy" the 3D scene is allowed to be.
// Mobile + reduced-motion users get a lighter, near-static version of the scene.
export function useDeviceCapability() {
  const [state, setState] = useState({ isMobile: false, reducedMotion: false });

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => setState({ isMobile: mq.matches, reducedMotion: rmq.matches });
    update();

    mq.addEventListener('change', update);
    rmq.addEventListener('change', update);
    return () => {
      mq.removeEventListener('change', update);
      rmq.removeEventListener('change', update);
    };
  }, []);

  return state;
}
