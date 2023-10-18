import { useRef } from 'react';
import { useCurrentScene } from './use-current-scene';
import { useSceneUpdate } from './use-scene-update';
import { RelativePositionProps } from '../types/relative-position';

/**
 * Position relative to camera.
 *
 * @param props
 * @param props.x - World position X
 * @param props.y - World position Y
 * @param props.camera - Camera
 */
export function useRelativePosition<T extends HTMLElement>({
  x,
  y,
  camera,
}: RelativePositionProps) {
  const currentScene = useCurrentScene();
  const relativeCamera = camera ?? currentScene.cameras.main;

  const refElement = useRef<T>(null);

  useSceneUpdate(currentScene, () => {
    if (!refElement.current) {
      return;
    }

    const rx = Math.round((x - relativeCamera.worldView.x) * relativeCamera.zoom);
    const ry = Math.round((y - relativeCamera.worldView.y) * relativeCamera.zoom);

    refElement.current.style.transform = `translate(${rx}px, ${ry}px)`;
  }, [x, y, relativeCamera]);

  return refElement;
}
