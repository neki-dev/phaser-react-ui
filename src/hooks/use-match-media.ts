import { useCallback, useEffect } from 'react';

export function useMatchMedia(
  query: string,
  callback: (matched: boolean) => void,
) {
  const onChange = useCallback(
    (event: MediaQueryListEvent) => {
      callback(event.matches);
    },
    [callback],
  );

  useEffect(() => {
    const match = window.matchMedia(query);

    callback(match.matches);

    match.addEventListener('change', onChange);

    return () => {
      match.removeEventListener('change', onChange);
    };
  }, [query, callback, onChange]);
}
