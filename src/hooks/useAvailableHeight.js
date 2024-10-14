import { useState, useLayoutEffect } from 'react';
import debounce from '../utils/debounce.js';

function useAvailableHeight(elementRef) {
  const DEBOUNCE_DELAY = 100;
  const [availableHeight, setAvailableHeight] = useState(0);

  useLayoutEffect(() => {
    const calculateAvailableHeight = () => {
      const elementHeight= elementRef?.current?.clientHeight || 0;
      setAvailableHeight(window.innerHeight - (document.body.clientHeight - elementHeight));
    };
    const debouncedWindowResizeHandler = debounce(calculateAvailableHeight, DEBOUNCE_DELAY);

    calculateAvailableHeight();

    window.addEventListener('resize', debouncedWindowResizeHandler);
    return () => {
      window.removeEventListener('resize', debouncedWindowResizeHandler);
      debouncedWindowResizeHandler.cancel();
    };
  }, [elementRef]);

  return availableHeight;
}

export default useAvailableHeight;
