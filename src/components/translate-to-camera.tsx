import React, { useEffect, useRef } from 'react';
import { useCurrentScene, useSceneUpdate } from '../hooks';

type Props = {
  position: {
    x: number
    y: number
  }
  children: React.ReactNode
};

export const TranslateToCamera: React.FC<Props> = ({ position, children }) => {
  const scene = useCurrentScene();

  const refTranslate = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refTranslate.current.style.position = 'absolute';
  }, []);

  useSceneUpdate(scene, () => {
    const camera = scene.cameras.main;
    const x = Math.round((position.x - camera.worldView.x) * camera.zoom);
    const y = Math.round((position.y - camera.worldView.y) * camera.zoom);

    refTranslate.current.style.transform = `translate(${x}px, ${y}px)`;
  }, [position]);

  return <div ref={refTranslate}>{children}</div>;
};
