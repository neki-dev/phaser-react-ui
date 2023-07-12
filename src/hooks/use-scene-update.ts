import type Phaser from 'phaser';
import { useCallback, useEffect } from 'react';

export function useSceneUpdate(scene: Phaser.Scene, callback: () => void, depends: any[] = []) {
  const safeCallback = useCallback(() => {
    try {
      callback();
    } catch (error) {
      console.error(error);
    }
  }, depends);

  useEffect(() => {
    safeCallback();

    scene.events.on('update', safeCallback);

    return () => {
      scene.events.off('update', safeCallback);
    };
  }, [safeCallback]);
}
