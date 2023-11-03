import React, { useCallback, useEffect } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

/**
 * Use adaptive click event on target element.
 *
 * @param ref - Target ref
 * @param type - Event type
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export function useClick(
  ref: React.RefObject<HTMLElement | Document>,
  type: 'up' | 'down',
  callback: (event: MouseEvent | TouchEvent) => void,
  depends: any[],
) {
  const isMobile = useMobilePlatform();

  const onClick = useCallback((event: MouseEvent | TouchEvent) => {
    callback(event);
    event.stopPropagation();
    event.preventDefault();
  }, depends);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let event: string;

    if (isMobile) {
      event = (type === 'up') ? 'touchend' : 'touchstart';
    } else {
      event = (type === 'up') ? 'mouseup' : 'mousedown';
    }

    // @ts-ignore
    element.addEventListener(event, onClick);

    return () => {
      // @ts-ignore
      element.removeEventListener(event, onClick);
    };
  }, [type, isMobile, onClick]);
}
