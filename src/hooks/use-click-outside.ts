import React, { useCallback, useEffect } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

/**
 * Use adaptive click event outside target element.
 *
 * @param ref - Target ref
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  depends: any[],
) {
  const isMobile = useMobilePlatform();

  const onClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!ref.current) {
        return;
      }

      const isInside = event.composedPath().includes(ref.current);

      if (!isInside) {
        callback();
      }
    },
    depends,
  );

  useEffect(() => {
    const event = isMobile ? 'touchend' : 'mouseup';

    document.addEventListener(event, onClick);

    return () => {
      document.removeEventListener(event, onClick);
    };
  }, [isMobile, onClick]);
}
