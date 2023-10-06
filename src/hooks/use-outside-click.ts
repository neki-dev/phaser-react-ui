import React, { useCallback, useEffect } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  depends: any[],
) {
  const isMobile = useMobilePlatform();

  const onClickOutside = useCallback(
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
    document.addEventListener(isMobile ? 'touchend' : 'click', onClickOutside);

    return () => {
      document.removeEventListener(isMobile ? 'touchend' : 'click', onClickOutside);
    };
  }, [onClickOutside]);
}
