import { useCallback, useRef } from 'react';

const useDebounce = (
  callback: (args: unknown) => unknown,
  delay: number
): ((args: unknown[]) => void) => {
  const timer = useRef<NodeJS.Timer | null>(null);

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

export default useDebounce;
