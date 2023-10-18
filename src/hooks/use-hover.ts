import React, { useCallback, useEffect } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

export function useHover(
  ref: React.RefObject<HTMLElement | Document>,
  callback: (state: boolean, event: MouseEvent) => void,
  depends: any[],
) {
  const isMobile = useMobilePlatform();

  const onMouseEnter = useCallback((event: MouseEvent) => {
    callback(true, event);
  }, depends);

  const onMouseLeave = useCallback((event: MouseEvent) => {
    callback(false, event);
  }, depends);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isMobile, onMouseEnter, onMouseLeave]);
}
