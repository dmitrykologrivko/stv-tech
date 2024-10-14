import { useLayoutEffect, useEffect, useMemo, useRef } from 'react';
import debounce from '../utils/debounce.js';

function useDebounce(callback, delay) {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, delay);
  }, [delay]);

  useEffect(() => {
    return () => {
      debouncedCallback.cancel();
    }
  }, [debouncedCallback]);

  return debouncedCallback;
}

export default useDebounce;
