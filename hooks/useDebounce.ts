import { useEffect, useState } from 'react';

/**
 * Debounces a value. Updates immediately when the value becomes empty
 * to restore full lists without delay when user clears the search.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update immediately when empty to fix "search doesn't restore full list" bug
    if (value === '' || value === null || value === undefined) {
      setDebouncedValue(value);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
