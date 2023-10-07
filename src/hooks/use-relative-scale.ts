import { useCallback, useEffect, useRef } from 'react';
import { useGame } from './use-game';
import { RelativeScaleProps } from '../types/relative-scale';

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

    refElement.current.style.transform = `scale(${zoom})`;
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
