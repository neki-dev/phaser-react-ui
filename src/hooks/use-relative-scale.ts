import { useCallback, useEffect, useRef } from 'react';
import { useGame } from './use-game';

type Props = {
  target: number
  min?: number
  max?: number
};

export function useRelativeScale({ target, min, max }: Props) {
  const game = useGame();

  const refElement = useRef<HTMLElement>(null);

  const onResize = useCallback(() => {
    const container = game.canvas.parentElement;
    let zoom = container.clientWidth / target;

    if (typeof max === 'number') {
      zoom = Math.min(zoom, max);
    }

    if (typeof min === 'number') {
      zoom = Math.max(zoom, min);
    }

    // @ts-ignore
    refElement.current.style.zoom = zoom;
  }, [target, min, max]);

  useEffect(() => {
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  return refElement;
}
