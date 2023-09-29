import { useEffect, useState } from 'react';

export function useMatchMedia(
  query: string,
) {
  const [matched, setMatched] = useState(null);

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
