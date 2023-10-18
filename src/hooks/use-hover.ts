import React, { useEffect, useState } from 'react';
import { useMobilePlatform } from './use-mobile-platform';

export function useHover(
  ref: React.RefObject<HTMLElement | Document>,
) {
  const isMobile = useMobilePlatform();

  const [isActive, setActive] = useState(false);

  const onMouseEnter = () => {
    setActive(true);
  };

  const onMouseLeave = () => {
    setActive(false);
  };

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
  }, [isMobile]);

  return isActive;
}
