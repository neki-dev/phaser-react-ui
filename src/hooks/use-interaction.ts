import { useEffect, useState } from 'react';
import { useMobilePlatform } from './use-mobile-platform';
import { useClick } from './use-click';
import { useClickOutside } from './use-click-outside';

/**
 * Using adaptive interaction flow.
 *
 * Desktop:
 * --[ mouse enter (activate) ] --> [ click (use) ] --> [ mouse leave (disactivate) ]
 *
 * Mobile:
 * --[ click (activate) ] --> [ second click (use) ] --> [ auto disactivate ]
 * --[ click (activate) ] --> [ outside click (disactivate) ]
 */
export function useInteraction(
  ref: React.RefObject<HTMLElement>,
  callback?: () => void,
  depends?: any[],
) {
  const isMobile = useMobilePlatform();

  const [isSelected, setSelected] = useState(false);

  useClickOutside(ref, () => {
    setSelected(false);
  }, []);

  useClick(ref, 'down', () => {
    if (isSelected) {
      callback?.();
      if (isMobile) {
        setSelected(false);
      }
    } else {
      setSelected(true);
    }
  }, [isSelected, isMobile, ...(depends ?? [])]);

  const onMouseEnter = () => {
    setSelected(true);
  };

  const onMouseLeave = () => {
    setSelected(false);
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

  return isSelected;
}
