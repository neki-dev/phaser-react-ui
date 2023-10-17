import React, { useCallback, useEffect } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

export function useClick(
  ref: React.RefObject<HTMLElement | Document>,
  type: 'up' | 'down',
  callback: (event: MouseEvent | TouchEvent) => void,
  depends: any[],
) {
  const isMobile = useMobilePlatform();

  const onClick = useCallback(
    (event: MouseEvent | TouchEvent) => {
      callback(event);
      event.stopPropagation();
      event.preventDefault();
    },
    depends,
  );

  useEffect(() => {
    const element = ref.current;
    let event: string;

    if (isMobile) {
      event = (type === 'up') ? 'touchend' : 'mouseup';
    } else {
      event = (type === 'down') ? 'touchstart' : 'mousedown';
    }

    element.addEventListener(event, onClick);

    return () => {
      element.removeEventListener(event, onClick);
    };
  }, [type, isMobile, onClick]);
}
