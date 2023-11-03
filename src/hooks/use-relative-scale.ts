import { useCallback, useEffect, useRef } from 'react';
import { useGame } from './use-game';
import { RelativeScaleProps } from '../types/relative-scale';

/**
 * Scale relative to canvas size.
 *
 * @param props
 * @param props.target - Target value
 * @param props.min - Min scale
 * @param props.max - Max scale
 * @param props.round - Rounding
 */
export function useRelativeScale<T extends HTMLElement>({
  target,
  min,
  max,
  round,
}: RelativeScaleProps) {
  const game = useGame();

  const refElement = useRef<T>(null);

  const onResize = useCallback(() => {
    if (!refElement.current) {
      return;
    }

    const container = game.canvas.parentElement;

    if (!container) {
      return;
    }

    let zoom = container.clientWidth / target;

    if (typeof max === 'number') {
      zoom = Math.min(zoom, max);
    }

    if (typeof min === 'number') {
      zoom = Math.max(zoom, min);
    }

    if (round) {
      zoom = Math.round(zoom * 10) / 10;
    }

    refElement.current.style.removeProperty('transform');
    refElement.current.style.removeProperty('transformOrigin');
    refElement.current.style.removeProperty('width');
    refElement.current.style.removeProperty('height');

    const originalWidth = refElement.current.clientWidth;
    const originalHeight = refElement.current.clientHeight;

    refElement.current.style.transform = `scale(${zoom})`;
    refElement.current.style.transformOrigin = '0 0';
    refElement.current.style.width = `${originalWidth / zoom}px`;
    refElement.current.style.height = `${originalHeight / zoom}px`;
  }, [target, min, max, round]);

  useEffect(() => {
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return refElement;
}
