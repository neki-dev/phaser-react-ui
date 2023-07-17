import { useRef } from 'react';
import { useCurrentScene } from './use-current-scene';
import { useSceneUpdate } from './use-scene-update';
import { RelativePositionProps } from '../types/relative-position';

export function useRelativePosition<T extends HTMLElement>({
  x,
  y,
}: RelativePositionProps) {
  const scene = useCurrentScene();

  const refElement = useRef<T>(null);

  useSceneUpdate(
    scene,
    () => {
      const camera = scene.cameras.main;
      const rx = Math.round((x - camera.worldView.x) * camera.zoom);
      const ry = Math.round((y - camera.worldView.y) * camera.zoom);

      refElement.current.style.transform = `translate(${rx}px, ${ry}px)`;
    },
    [x, y],
  );

  return refElement;
}
