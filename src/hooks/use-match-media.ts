import { useEffect, useState } from 'react';

/**
 * Get actual media query result.
 *
 * @param query - Media query
 */
export function useMatchMedia(
  query: string,
) {
  const [matched, setMatched] = useState<boolean | null>(null);

  const onChange = (event: MediaQueryListEvent) => {
    setMatched(event.matches);
  };

  useEffect(() => {
    const match = window.matchMedia(query);

    setMatched(match.matches);

    match.addEventListener('change', onChange);

    return () => {
      match.removeEventListener('change', onChange);
    };
  }, [query]);

  return matched;
}
