import { useEffect, useRef } from 'react';
import { useCurrentScene } from './use-current-scene';
import { useSceneUpdate } from './use-scene-update';

type Props = {
  x: number
  y: number
};

export function useRelativePosition<T extends HTMLElement>({ x, y }: Props) {
  const scene = useCurrentScene();

  const refElement = useRef<T>(null);

  useEffect(() => {
    refElement.current.style.position = 'absolute';
  }, []);

  useSceneUpdate(scene, () => {
    const camera = scene.cameras.main;
    const rx = Math.round((x - camera.worldView.x) * camera.zoom);
    const ry = Math.round((y - camera.worldView.y) * camera.zoom);

    refElement.current.style.transform = `translate(${rx}px, ${ry}px)`;
  }, [x, y]);

  return refElement;
}
